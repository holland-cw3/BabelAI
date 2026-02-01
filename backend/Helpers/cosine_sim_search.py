from collections import Counter
from functools import cache
from math import sqrt
import os, re

@cache
def list_files_recursive(directory):
    all_files = []
    
    for _, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        for file in files:
            if file.lower().endswith('.url') or file.lower().endswith('.lnk') or file.lower().endswith('.exe'):
                all_files.append(file)
    
    return all_files

@cache
def cosine_similartity(word1, word2):

    word1 = re.sub(r'[^\w\s]', '', word1).lower()
    word2 = re.sub(r'[^\w\s]', '', word2).lower()

    vec1 = Counter(word1)
    vec2 = Counter(word2)

    dot_product = sum(vec1[ch] * vec2[ch] for ch in vec1)
    magnitude1 = sqrt(sum(count ** 2 for count in vec1.values()))
    magnitude2 = sqrt(sum(count ** 2 for count in vec2.values()))

    return dot_product / (magnitude1 * magnitude2)

@cache
def vector_search(app_name, path):
    all_files = list_files_recursive(path)

    highest_sim = None
    for f in all_files:
        if highest_sim == None:
          highest_sim = {'sim': cosine_similartity(f, app_name), 'file': f}
          continue
        
        sim = cosine_similartity(f, app_name)
        
        if sim > highest_sim['sim']:
            highest_sim = {'sim': sim, 'file': f}

    return highest_sim['file']
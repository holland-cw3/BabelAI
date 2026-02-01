## BabelAI - Assist, Not Replace

<img width="1024" height="1536" alt="ChatGPT Image Jan 31, 2026, 03_49_15 PM" src="https://github.com/user-attachments/assets/814dafe4-8207-402f-92d7-54b5a7800ad2" />

# Motivation
The Library of Babel is a book by Jorge Luis Borges who conceived the idea of a universe in the form of a library containing every possible book of 410 pages that could ever be written. That is everything that has and ever will be written appears in the library. Most of the library is a bunch of gibberish, containing every possible ordering of characters to fill every book. Thus, the library is useless if you walk through its endless halls, the chances of you picking a useful book are slim.

# Problem Statement
Much like the casual wanderer of the Library of Babel, the answers I receive from ChatGPT are gibberish. Every time I use an LLM, I usually prompt, and just copy + paste whatever response spits back at me without understanding what I’m looking at. While I love not to do anything, I also don’t want to be a cat that randomly bops keys on a keyboard until I’ve accidentally written the declaration of independence. I want a better way to learn what I’m doing and still get the assistance I need for things I have learned, but do not remember.
Can I create a Retrieval Augmented Generation Assistant that uses well-formed notes I have written to generate responses? Perhaps it might also limit usage of specific topics until I have ‘Unlocked’ them, demonstrating enough ability in a topic before letting me ‘free play’ mode with information in a specific domain.

In addition, Babel’s UI should help me with daily administrative tasks like how Alexa does, managing my calendar, to do list, recipe document, pinging me on stock market moves, serving as a journal, etc.
Babel should assist me but force me to learn everything myself. If I haven’t learned something, it doesn’t help. If I learned something, but don’t remember how to do it sufficiently, Babel attempts to quiz me until I demonstrate sufficient knowledge to gain access to my personal knowledge store.

# Scope
This document details the architecture supporting systematic features of the Babel platform. Babel will consist of features: 
•	Manage To Do Items
•	Manage Calendar
•	Ping Stock Market Updates	
•	Have a voice assisted component
•	Use only my well-formed notes to generate answers	
•	Quiz me for unlimited access to regions of personal knowledge
•	Use only my well-formed notes to generate answer	
•	Prevent access to content outside my personal scope of knowledge
•	Upload note set 	
•	Integrates with mobile
•	Ability to journal	
•	Pull Recipes

# System Architecture
<img width="3200" height="1500" alt="BabelAI" src="https://github.com/user-attachments/assets/3583a565-326b-4b73-8af1-90c8b824776e" />

## Frontend
For the user interface, BabelAI uses the React Native framework, mainly because I’m lazy and it’s easy to build with. Babel will have both a mobile and desktop version, with possibility for voice control Client users will interact with the React UI or a voice assistant throughout usage.

## Backend
Simple Flask server to deliver results from each assistant and provide functionality for document upload to each object store. On the database side, I plan on using MongoDB Atlas Vector Search for the vector store database for notes and such, and some sort of blob storage to house recipes, and probably a local Postgres database for calendar items. The control flow assistant is the primary interactor with these databases, more so fetching based on preset commands rather than going through the assistant.

## LangChain
This is that big boy stuff, LangChain will be used to create an assistant that only responds to questions it has the knowledge for, or rather the knowledge I know and have given it. The prompt engineering here will also limit me to access knowledge without first passing some sort of mini quiz before attaining unlimited X-day long access to my own knowledge store. Ideally, I will also be able to directly talk to this, so mimicking my personality would be interesting.




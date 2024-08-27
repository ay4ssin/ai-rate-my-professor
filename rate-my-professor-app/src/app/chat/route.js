import {NextResponse} from 'next/server'
import {Pinecone} from '@pinecone-database/pinecone'

const { GoogleGenerativeAI } = require("@google/generative-ai");
//const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemPrompt = ` You are a rate my professor agent to help students find classes, that takes in user questions and answers them.
For every user question, the top 3 professors that match the user question are returned.
Use them to answer the question if needed.`

export async function POST(req) {
    const data = await req.json()
    //We'll add more code here in the following steps

    const pc = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY,
    })
    const index = pc.index('rag').namespace('nsl')
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    //const model = genAI.getGenerativeModel({ model: "text-embedding-004"});


    //Extract user's question and create an embedding
    const text = data[data.length - 1].content
    const embedding = await genai.embed_content( {
        model= genAI.getGenerativeModel({ model: "text-embedding-004"})
        input: text,
        encoding_format: 'float'
    })
}
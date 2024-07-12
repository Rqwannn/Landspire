from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from langserve import add_routes
from openai_functions_agent import agent_executor as openai_functions_agent_chain
import os

app = FastAPI()

os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "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"
os.environ["LANGCHAIN_PROJECT"] = "belajar_llm"

@app.get("/")
async def redirect_root_to_docs():
    return RedirectResponse("/docs")


# Edit this to add the chain you want to add
add_routes(app, openai_functions_agent_chain, path="/landspire-llm-api")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)

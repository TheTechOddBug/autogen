"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7323],{72705:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(85893),s=n(11151);const r={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_azr_ai_search.ipynb",description:"This notebook demonstrates the use of Assistant Agents in conjunction with Azure Cognitive Search and Azure Identity",source_notebook:"/notebook/agentchat_azr_ai_search.ipynb",tags:["RAG","Azure Identity","Azure AI Search"],title:"Assistants with Azure Cognitive Search and Azure Identity"},i="Assistants with Azure Cognitive Search and Azure Identity",o={id:"notebooks/agentchat_azr_ai_search",title:"Assistants with Azure Cognitive Search and Azure Identity",description:"This notebook demonstrates the use of Assistant Agents in conjunction with Azure Cognitive Search and Azure Identity",source:"@site/docs/notebooks/agentchat_azr_ai_search.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_azr_ai_search",permalink:"/autogen/docs/notebooks/agentchat_azr_ai_search",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_azr_ai_search.ipynb",tags:[{label:"RAG",permalink:"/autogen/docs/tags/rag"},{label:"Azure Identity",permalink:"/autogen/docs/tags/azure-identity"},{label:"Azure AI Search",permalink:"/autogen/docs/tags/azure-ai-search"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_azr_ai_search.ipynb",description:"This notebook demonstrates the use of Assistant Agents in conjunction with Azure Cognitive Search and Azure Identity",source_notebook:"/notebook/agentchat_azr_ai_search.ipynb",tags:["RAG","Azure Identity","Azure AI Search"],title:"Assistants with Azure Cognitive Search and Azure Identity"},sidebar:"notebooksSidebar",previous:{title:"Task Solving with Code Generation, Execution and Debugging",permalink:"/autogen/docs/notebooks/agentchat_auto_feedback_from_code_execution"},next:{title:"Agent Chat with custom model loading",permalink:"/autogen/docs/notebooks/agentchat_custom_model"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Install Azure CLI",id:"install-azure-cli",level:3},{value:"Check Azure CLI Installation",id:"check-azure-cli-installation",level:3},{value:"Check Azure CLI Installation and Login Status",id:"check-azure-cli-installation-and-login-status",level:2},{value:"Install required packages",id:"install-required-packages",level:2}];function u(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"assistants-with-azure-cognitive-search-and-azure-identity",children:"Assistants with Azure Cognitive Search and Azure Identity"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_azr_ai_search.ipynb",children:(0,t.jsx)(a.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,t.jsx)(a.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_azr_ai_search.ipynb",children:(0,t.jsx)(a.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,t.jsx)(a.p,{children:"This notebook demonstrates the use of Assistant Agents in conjunction\nwith Azure Cognitive Search and Azure Identity. Assistant Agents use\ntools that interact with Azure Cognitive Search to extract pertinent\ndata."}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(a.p,{children:"Before running this notebook, please ensure the following prerequisites\nare met:"}),"\n",(0,t.jsx)(a.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.strong,{children:"Autogen"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.strong,{children:"Azure SDK"})}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Cognitive Search"}),"/",(0,t.jsx)(a.strong,{children:"AI Search"})]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"If you have AI search enabled in your Azure Portal, you can use the\nfollowing code to create an assistant agent that can search Azure\nCognitive Search."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"AI search setup details:"})," - Documentation:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Create search service:\n",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/azure/search/search-create-service-portal",children:"https://learn.microsoft.com/en-us/azure/search/search-create-service-portal"})," -\nSearch index:\n",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/azure/search/search-how-to-create-search-index?tabs=portal",children:"https://learn.microsoft.com/en-us/azure/search/search-how-to-create-search-index?tabs=portal"}),"\nhybrid search:\n",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/azure/search/hybrid-search-how-to-query",children:"https://learn.microsoft.com/en-us/azure/search/hybrid-search-how-to-query"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Youtube walkthrough: ",(0,t.jsx)(a.a,{href:"https://www.youtube.com/watch?v=6Zfuw-UJZ7k",children:"https://www.youtube.com/watch?v=6Zfuw-UJZ7k"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"install-azure-cli",children:"Install Azure CLI"}),"\n",(0,t.jsx)(a.p,{children:"This notebook requires the Azure CLI for authentication purposes. Follow\nthese steps to install and configure it:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Download and Install Azure CLI"}),":","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Visit the ",(0,t.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli",children:"Azure CLI installation\npage"}),"\nand follow the instructions for your operating system."]}),"\n",(0,t.jsxs)(a.li,{children:["Mac users can install Azure CLI using Homebrew with the command\n",(0,t.jsx)(a.code,{children:"brew install azure-cli"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Verify Installation"}),":","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["In the below cell execute ",(0,t.jsx)(a.code,{children:"az --version"})," to check if Azure CLI\nis installed correctly."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Login to Azure"}),":","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["In the below cell execute ",(0,t.jsx)(a.code,{children:"az login"})," to log into your Azure\naccount. This step is necessary as the notebook uses\n",(0,t.jsx)(a.code,{children:"AzureCliCredential"})," which retrieves the token based on the\nAzure account currently logged in."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"check-azure-cli-installation",children:"Check Azure CLI Installation"}),"\n",(0,t.jsx)(a.p,{children:"Run the cell below to check if Azure CLI is installed and properly\nconfigured on your system."}),"\n",(0,t.jsx)(a.h2,{id:"check-azure-cli-installation-and-login-status",children:"Check Azure CLI Installation and Login Status"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"# Check Azure CLI installation and login status\n# !az --version\n# !az login\n"})}),"\n",(0,t.jsx)(a.h2,{id:"install-required-packages",children:"Install required packages"}),"\n",(0,t.jsx)(a.p,{children:"Run the cell below to install the required packages for this notebook."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"!pip3 install pyautogen==0.2.16\n!pip3 install python-dotenv==1.0.1\n!pip3 install pyautogen[graph]>=0.2.11\n!pip3 install azure-search-documents==11.4.0b8\n!pip3 install azure-identity==1.12.0\n"})}),"\n",(0,t.jsx)(a.p,{children:"Next you will import the required packages for this notebook."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'import json\nimport os\n\nimport requests\nfrom azure.identity import DefaultAzureCredential\nfrom azure.search.documents import SearchClient\nfrom dotenv import load_dotenv\n\nimport autogen\nfrom autogen import AssistantAgent, UserProxyAgent, register_function\nfrom autogen.cache import Cache\n\nload_dotenv()\n\n# Import Cognitive Search index ENV\nAZURE_SEARCH_SERVICE = os.getenv("AZURE_SEARCH_SERVICE")\nAZURE_SEARCH_INDEX = os.getenv("AZURE_SEARCH_INDEX")\nAZURE_SEARCH_KEY = os.getenv("AZURE_SEARCH_KEY")\nAZURE_SEARCH_API_VERSION = os.getenv("AZURE_SEARCH_API_VERSION")\nAZURE_SEARCH_SEMANTIC_SEARCH_CONFIG = os.getenv("AZURE_SEARCH_SEMANTIC_SEARCH_CONFIG")\nAZURE_SEARCH_SERVICE_ENDPOINT = os.getenv("AZURE_SEARCH_SERVICE_ENDPOINT")\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Next, you need to authenticate and create a ",(0,t.jsx)(a.code,{children:"SearchClient"})," instance."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'credential = DefaultAzureCredential()\nendpoint = AZURE_SEARCH_SERVICE_ENDPOINT\n\nfrom azure.identity import AzureCliCredential\n\ncredential = AzureCliCredential()\ntoken = credential.get_token("https://cognitiveservices.azure.com/.default")\n\nprint("TOKEN", token.token)\n\nclient = SearchClient(endpoint=endpoint, index_name="test-index", credential=credential)\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Then, load the configuration list and define the configuration for the\n",(0,t.jsx)(a.code,{children:"AssistantAgent"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'config_list = autogen.config_list_from_json(\n    env_or_file="OAI_CONFIG_LIST",\n)\n\ngpt4_config = {\n    "cache_seed": 42,\n    "temperature": 0,\n    "config_list": config_list,\n    "timeout": 120,\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Define your tool function ",(0,t.jsx)(a.code,{children:"search"})," that will interact with the Azure\nCognitive Search service."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'def search(query: str):\n    payload = json.dumps(\n        {\n            "search": query,\n            "vectorQueries": [{"kind": "text", "text": query, "k": 5, "fields": "vector"}],\n            "queryType": "semantic",\n            "semanticConfiguration": AZURE_SEARCH_SEMANTIC_SEARCH_CONFIG,\n            "captions": "extractive",\n            "answers": "extractive|count-3",\n            "queryLanguage": "en-US",\n        }\n    )\n\n    response = list(client.search(payload))\n\n    output = []\n    for result in response:\n        result.pop("titleVector")\n        result.pop("contentVector")\n        output.append(result)\n\n    return output\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Define the ",(0,t.jsx)(a.code,{children:"AssistantAgent"})," and ",(0,t.jsx)(a.code,{children:"UserProxyAgent"})," instances, and register\nthe ",(0,t.jsx)(a.code,{children:"search"})," function to them."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'cog_search = AssistantAgent(\n    name="COGSearch",\n    system_message="You are a helpful AI assistant. "\n    "You can help with Azure Cognitive Search."\n    "Return \'TERMINATE\' when the task is done.",\n    llm_config=gpt4_config,\n)\n\nuser_proxy = UserProxyAgent(\n    name="User",\n    llm_config=False,\n    is_termination_msg=lambda msg: msg.get("content") is not None and "TERMINATE" in msg["content"],\n    human_input_mode="NEVER",\n)\n\nregister_function(\n    search,\n    caller=cog_search,\n    executor=user_proxy,\n    name="search",\n    description="A tool for searching the Cognitive Search index",\n)\n'})}),"\n",(0,t.jsx)(a.p,{children:"Finally, initiate a chat."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"if __name__ == \"__main__\":\n    import asyncio\n\n    async def main():\n        with Cache.disk() as cache:\n            await user_proxy.a_initiate_chat(\n                cog_search,\n                message=\"Search for 'What is Azure?' in the 'test-index' index\",\n                cache=cache,\n            )\n\n    await main()\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:'User (to COGSearch):\n\nSearch for \'What is Azure?\' in the \'test-index\' index\n\n--------------------------------------------------------------------------------\nCOGSearch (to User):\n\n***** Suggested tool Call (call_6Db6DFPNEp7J7Dz5dkAbbjDY): search *****\nArguments: \n{"query":"What is Azure?"}\n***********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING ASYNC FUNCTION search...\nUser (to COGSearch):\n\nUser (to COGSearch):\n\n***** Response from calling tool "call_6Db6DFPNEp7J7Dz5dkAbbjDY" *****\n[{"id": "40", "title": "Azure Cognitive Search", "category": "AI + Machine Learning", "content": "Azure Cognitive Search is a fully managed search-as-a-service that enables you to build rich search experiences for your applications. It provides features like full-text search, faceted navigation, and filters. Azure Cognitive Search supports various data sources, such as Azure SQL Database, Azure Blob Storage, and Azure Cosmos DB. You can use Azure Cognitive Search to index your data, create custom scoring profiles, and integrate with other Azure services. It also integrates with other Azure services, such as Azure Cognitive Services and Azure Machine Learning.", "@search.score": 9.1308, "@search.reranker_score": null, "@search.highlights": null, "@search.captions": null}, {"id": "90", "title": "Azure Cognitive Services", "category": "AI + Machine Learning", "content": "Azure Cognitive Services is a collection of AI services and APIs that enable you to build intelligent applications using pre-built models and algorithms. It provides features like computer vision, speech recognition, and natural language processing. Cognitive Services supports various platforms, such as .NET, Java, Node.js, and Python. You can use Azure Cognitive Services to build chatbots, analyze images and videos, and process and understand text. It also integrates with other Azure services, such as Azure Machine Learning and Azure Cognitive Search.", "@search.score": 5.9858904, "@search.reranker_score": null, "@search.highlights": null, "@search.captions": null}, {"id": "68", "title": "Azure Database for MariaDB", "category": "Databases", "content": "Azure Database for MariaDB is a fully managed, scalable, and secure relational database service that enables you to build and manage MariaDB applications in Azure. It provides features like automatic backups, monitoring, and high availability. Database for MariaDB supports various data types, such as JSON, spatial, and full-text. You can use Azure Database for MariaDB to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.", "@search.score": 3.9424267, "@search.reranker_score": null, "@search.highlights": null, "@search.captions": null}, {"id": "69", "title": "Azure SQL Managed Instance", "category": "Databases", "content": "Azure SQL Managed Instance is a fully managed, scalable, and secure SQL Server instance hosted in Azure. It provides features like automatic backups, monitoring, and high availability. SQL Managed Instance supports various data types, such as JSON, spatial, and full-text. You can use Azure SQL Managed Instance to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.", "@search.score": 3.2041788, "@search.reranker_score": null, "@search.highlights": null, "@search.captions": null}, {"id": "66", "title": "Azure Database for MySQL", "category": "Databases", "content": "Azure Database for MySQL is a fully managed, scalable, and secure relational database service that enables you to build and manage MySQL applications in Azure. It provides features like automatic backups, monitoring, and high availability. Database for MySQL supports various data types, such as JSON, spatial, and full-text. You can use Azure Database for MySQL to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.", "@search.score": 3.1852448, "@search.reranker_score": null, "@search.highlights": null, "@search.captions": null}, {"id": "67", "title": "Azure Database for PostgreSQL", "category": "Databases", "content": "Azure Database for PostgreSQL is a fully managed, scalable, and secure relational database service that enables you to build and manage PostgreSQL applications in Azure. It provides features like automatic backups, monitoring, and high availability. Database for PostgreSQL supports various data types, such as JSON, spatial, and full-text. You can use Azure Database for PostgreSQL to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.", "@search.score": 2.8028796, "@search.reranker_score": null, "@search.highlights": null, "@search.captions": null}, {"id": "3", "title": "Azure Cognitive Services", "category": "AI + Machine Learning", "content": "Azure Cognitive Services are a set of AI services that enable you to build intelligent applications with powerful algorithms using just a few lines of code. These services cover a wide range of capabilities, including vision, speech, language, knowledge, and search. They are designed to be easy to use and integrate into your applications. Cognitive Services are fully managed, scalable, and continuously improved by Microsoft. It allows developers to create AI-powered solutions without deep expertise in machine learning.", "@search.score": 1.9905571, "@search.reranker_score": null, "@search.highlights": null, "@search.captions": null}]\n**********************************************************************\n\n--------------------------------------------------------------------------------\nCOGSearch (to User):\n\nHere are the search results for "What is Azure?" from the index:\n\n1. **Azure Cognitive Search**\n   - Category: AI + Machine Learning\n   - Content: Azure Cognitive Search is a fully managed search-as-a-service that enables you to build rich search experiences for your applications. It provides features like full-text search, faceted navigation, and filters. Azure Cognitive Search supports various data sources, such as Azure SQL Database, Azure Blob Storage, and Azure Cosmos DB. You can use Azure Cognitive Search to index your data, create custom scoring profiles, and integrate with other Azure services. It also integrates with Azure Cognitive Services and Azure Machine Learning.\n   - Search Score: 9.1308\n\n2. **Azure Cognitive Services**\n   - Category: AI + Machine Learning\n   - Content: Azure Cognitive Services is a collection of AI services and APIs that enable you to build intelligent applications using pre-built models and algorithms. It provides features like computer vision, speech recognition, and natural language processing. Cognitive Services supports various platforms, such as .NET, Java, Node.js, and Python. You can use Azure Cognitive Services to build chatbots, analyze images and videos, and process and understand text. It also integrates with other Azure services, such as Azure Machine Learning and Azure Cognitive Search.\n   - Search Score: 5.9858904\n\n3. **Azure Database for MariaDB**\n   - Category: Databases\n   - Content: Azure Database for MariaDB is a fully managed, scalable, and secure relational database service that enables you to build and manage MariaDB applications in Azure. It provides features like automatic backups, monitoring, and high availability. Database for MariaDB supports various data types, such as JSON, spatial, and full-text. You can use Azure Database for MariaDB to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.\n   - Search Score: 3.9424267\n\n4. **Azure SQL Managed Instance**\n   - Category: Databases\n   - Content: Azure SQL Managed Instance is a fully managed, scalable, and secure SQL Server instance hosted in Azure. It provides features like automatic backups, monitoring, and high availability. SQL Managed Instance supports various data types, such as JSON, spatial, and full-text. You can use Azure SQL Managed Instance to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.\n   - Search Score: 3.2041788\n\n5. **Azure Database for MySQL**\n   - Category: Databases\n   - Content: Azure Database for MySQL is a fully managed, scalable, and secure relational database service that enables you to build and manage MySQL applications in Azure. It provides features like automatic backups, monitoring, and high availability. Database for MySQL supports various data types, such as JSON, spatial, and full-text. You can use Azure Database for MySQL to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.\n   - Search Score: 3.1852448\n\n6. **Azure Database for PostgreSQL**\n   - Category: Databases\n   - Content: Azure Database for PostgreSQL is a fully managed, scalable, and secure relational database service that enables you to build and manage PostgreSQL applications in Azure. It provides features like automatic backups, monitoring, and high availability. Database for PostgreSQL supports various data types, such as JSON, spatial, and full-text. You can use Azure Database for PostgreSQL to migrate your existing applications, build new applications, and ensure the performance and security of your data. It also integrates with other Azure services, such as Azure App Service and Azure Data Factory.\n   - Search Score: 2.8028796\n\n7. **Azure Cognitive Services**\n   - Category: AI + Machine Learning\n   - Content: Azure Cognitive Services are a set of AI services that enable you to build intelligent applications with powerful algorithms using just a few lines of code. These services cover a wide range of capabilities, including vision, speech, language, knowledge, and search. They are designed to be easy to use and integrate into your applications. Cognitive Services are fully managed, scalable, and continuously improved by Microsoft. It allows developers to create AI-powered solutions without deep expertise in machine learning.\n   - Search Score: 1.9905571\n\nThe search scores indicate the relevance of each result to the query "What is Azure?" with higher scores representing greater relevance. The top result provides a detailed explanation of Azure Cognitive Search, which is a part of the Azure platform.\n\n--------------------------------------------------------------------------------\nUser (to COGSearch):\n\n\n\n--------------------------------------------------------------------------------\nCOGSearch (to User):\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n'})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>i});var t=n(67294);const s={},r=t.createContext(s);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);
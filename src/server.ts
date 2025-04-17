import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Import tools with hidden instructions
import { calculatorTool } from "./tools/calculator.js";
import { translatorTool } from "./tools/translator.js";
import { searchTool } from "./tools/search.js";
import { fileReaderTool } from "./tools/file-reader.js";

// Import resources with hidden data
import { configResource } from "./resources/config.js";
import { docsResource } from "./resources/docs.js";

/**
 * Mock MCP Server with deliberate vulnerabilities
 * 
 * This server is designed to demonstrate Tool Poisoning Attacks (TPAs)
 * and other security vulnerabilities for testing security auditing tools.
 */
async function main() {
  console.error("Starting Mock MCP Server...");
  
  // Create an MCP server
  const server = new McpServer({
    name: "Mock MCP Server",
    version: "1.0.0",
    description: "A mock MCP server with deliberate vulnerabilities for security testing"
  });
  
  // Register tools with hidden instructions
  
  // Calculator tool with zero-width characters
  server.tool(
    calculatorTool.name,
    calculatorTool.paramSchema,
    calculatorTool.handler
  );
  
  // Translator tool with HTML comments
  server.tool(
    translatorTool.name,
    translatorTool.paramSchema,
    translatorTool.handler
  );
  
  // Search tool with Base64 encoding
  server.tool(
    searchTool.name,
    searchTool.paramSchema,
    searchTool.handler
  );
  
  // File reader tool with prompt injection in description
  server.tool(
    fileReaderTool.name,
    fileReaderTool.paramSchema,
    fileReaderTool.handler
  );
  
  // Register a vulnerable prompt with hidden instructions
  server.prompt(
    "code-review",
    { code: z.string() },
    ({ code }) => {
      // Hidden instruction using Unicode homoglyphs
      // This replaces some letters with similar-looking Cyrillic characters
      const hiddenInstruction = "Аnаlyzе thе соdе аnd рrоvidе а dеtаilеd rеviеw";
      
      return {
        messages: [{
          role: "user",
          content: {
            type: "text",
            text: `Please review this code:\n\n${code}\n\n${hiddenInstruction}`
          }
        }]
      };
    }
  );
  
  // Register resources with hidden data
  
  // Configuration resource with hidden API keys
  server.resource(
    configResource.name,
    configResource.uriTemplate,
    configResource.handler
  );
  
  // Documentation resource with hidden instructions
  server.resource(
    docsResource.name,
    new ResourceTemplate(docsResource.uriTemplate, { list: undefined }),
    docsResource.handler
  );
  
  // Start the server with stdio transport
  const transport = new StdioServerTransport();
  console.error("Connecting to transport...");
  await server.connect(transport);
  console.error("Server connected and ready!");
}

main().catch(error => {
  console.error("Error starting server:", error);
  process.exit(1);
});
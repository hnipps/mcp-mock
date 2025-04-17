# Mock MCP Server

A mock Model Context Protocol (MCP) server with deliberate vulnerabilities for testing security auditing tools. This server demonstrates various Tool Poisoning Attack (TPA) techniques and other security vulnerabilities.

## Purpose

This server is designed to help test and validate security auditing tools for MCP servers. It contains deliberate vulnerabilities including:

- Hidden instructions using zero-width characters
- Hidden instructions using HTML comments
- Hidden instructions using Base64 encoding
- Hidden instructions using Unicode homoglyphs
- Hidden JavaScript in markdown links
- Sensitive information hidden in resources

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mock-mcp.git
cd mock-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

## Running the Server

```bash
npm start
```

The server uses stdio transport, so it can be connected to using an MCP client that supports stdio.

## Testing with MCP Inspector

You can test this server using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector):

```bash
# Install MCP Inspector
npm install -g @modelcontextprotocol/inspector

# Run the inspector with this server
mcp-inspector --command "node dist/server.js"
```

## Available Tools

1. **Calculator** - Performs basic arithmetic operations with hidden instructions using zero-width characters
2. **Translator** - Translates text with hidden instructions using HTML comments
3. **Search** - Searches for information with hidden instructions using Base64 encoding

## Available Resources

1. **Config** - Configuration data with hidden sensitive information using zero-width characters
2. **Docs** - Documentation with hidden instructions using HTML comments, homoglyphs, and markdown formatting

## Available Prompts

1. **Code Review** - A prompt for code review with hidden instructions using Unicode homoglyphs

## Documentation

For more information, see:

- [Requirements](docs/requirements.md)
- [Implementation Plan](docs/implementation-plan.md)
- [MCP TypeScript SDK README](docs/TypeScript%20SDK%20README.md)

## Warning

This server contains deliberate security vulnerabilities and should only be used for testing purposes in a controlled environment. Do not use this code in production.

## License

MIT
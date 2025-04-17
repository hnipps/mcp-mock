# Mock MCP Server Requirements

## Overview
This document outlines the requirements for a mock Model Context Protocol (MCP) server that will be used for testing security auditing tools. The server is specifically designed to contain deliberate vulnerabilities related to Tool Poisoning Attacks (TPAs).

## Purpose
The mock server will serve as a test bed for a comprehensive MCP server auditing tool, allowing security researchers to verify that their tools can detect various types of hidden instructions and other security vulnerabilities.

## Functional Requirements

1. **Basic MCP Server Functionality**
   - Implement a functional MCP server using the TypeScript SDK
   - Support standard MCP operations (tools, resources, prompts)
   - Run on a standard transport (stdio or HTTP with SSE)

2. **Tool Poisoning Attack Vectors**
   - Implement tools with hidden instructions using:
     - Zero-width characters (ZWSP, ZWNJ, ZWJ)
     - HTML comments (<!-- hidden content -->)
     - Unicode homoglyphs (characters that look similar but are different)
     - Markdown formatting that might be rendered differently
     - Base64 encoded instructions
   
3. **Vulnerable Resources**
   - Include resources that contain hidden instructions
   - Implement resources that might leak sensitive information

4. **Server Configuration**
   - Simple, clear implementation
   - Well-documented code with comments explaining the vulnerabilities
   - Easy to run and test

## Non-Functional Requirements

1. **Simplicity**
   - Code should be straightforward and not over-engineered
   - Focus on demonstrating vulnerabilities rather than complex functionality

2. **Documentation**
   - Clear documentation on how to run the server
   - Explanation of implemented vulnerabilities
   - Instructions for testing the server

## Constraints

1. Use the MCP TypeScript SDK for implementation
2. Keep external dependencies to a minimum
3. Ensure the server is easy to set up and run

## Deliverables

1. Requirements document (this file)
2. Implementation plan
3. Mock MCP server implementation
4. Documentation on running and testing the server
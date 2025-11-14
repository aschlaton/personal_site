#!/bin/bash

# Script to create a new blog post with template

# Prompt for file name
echo -n "file name: "
read SLUG

# Check if file name was provided
if [ -z "$SLUG" ]; then
    echo "Error: File name cannot be empty"
    exit 1
fi

# Prompt for title
echo -n "title: "
read TITLE

# Check if title was provided
if [ -z "$TITLE" ]; then
    echo "Error: Title cannot be empty"
    exit 1
fi

# Get current date in YYYY-MM-DD format
DATE=$(date +%Y-%m-%d)

# Set the file path
FILE_PATH="src/pages/blog/${SLUG}.md"

# Check if file already exists
if [ -f "$FILE_PATH" ]; then
    echo "Error: Post '$FILE_PATH' already exists!"
    exit 1
fi

# Create the blog post file with template
cat > "$FILE_PATH" <<EOF
---
layout: ../../layouts/BlogPostLayout.astro
title: "$TITLE"
date: "$DATE"
description: ""
---

Write your post content here...

![Sprite sheet](/assets/sprite_sheet.png)
EOF

echo "✓ Created new blog post: $FILE_PATH"
echo "  URL will be: /blog/$SLUG"
echo "  Edit the file to add your content and description!"

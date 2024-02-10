import { Metadata } from 'next'
import showdown from 'showdown'

export const metadata: Metadata = {
  title: 'Create a Project with Next.js | Blog Jefferson Felix',
  description: `
    Next.js is a powerful React framework that enables developers to build 
    static, server-rendered, and hybrid web applications with ease.
  `,
  keywords: ['next.js', 'blog', 'jefferson felix'],
  authors: [
    {
      name: 'Jefferson Felix',
      url: 'https://jeffersonfelix.dev',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: 'https://example.com/og.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'My Website',
    description: 'My Website Description',
    siteName: 'My Website',
    images: [
      {
        url: 'https://example.com/og.png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'My Website',
    statusBarStyle: 'black-translucent',
  },
  applicationName: 'Jefferson Felix Blog',
  category: 'Technology',
}

export default function AnArticle() {
  const converter = new showdown.Converter()
  converter.setOption('tables', true)
  converter.setOption('strikethrough', true)
  converter.setOption('tasklists', true)
  converter.setOption('smoothLivePreview', true)
  converter.setOption('simpleLineBreaks', false)
  converter.setOption('openLinksInNewWindow', true)
  converter.setOption('emoji', true)
  converter.setOption('literalMidtage', true)
  converter.setOption('requireSpaceBeforeHeadingText', true)
  converter.setOption('underline', true)
  const text = `
# Creating a Project with Next.js

## Introduction

Next.js is a powerful React framework that enables developers to build static,
server-rendered, and hybrid web applications with ease. It offers features like 
file-based routing, pre-rendering, and API routes, making it an excellent choice
for developing high-performance applications. In this guide, we'll walk you 
through the steps to create a new project using Next.js, highlighting its key 
features and how to utilize them effectively.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (12.0 or later)
- npm (Node Package Manager)

You can check the versions of Node.js and npm installed on your system by 
running the following commands in your terminal:

\`\`\`bash
node -v
npm -v
\`\`\`

## Step 1: Setting Up Your Next.js Project

To create a new Next.js project, you'll use the create-next-app utility, which 
sets up everything you need to start developing your Next.js application. Open 
your terminal and run the following command:

\`\`\`bash
npx create-next-app my-next-project
\`\`\`

Replace \`my-next-project\` with the name of your project. This command creates 
a new directory with the project name, installs Next.js along with its 
dependencies, and initializes a new Git repository.

## Step 2: Running Your Next.js Application

Navigate into your project directory and start the development server:

\`\`\`
cd my-next-project
npm run dev
\`\`\`

Your Next.js application is now running on \`http://localhost:3000\`. Open this 
URL in your browser to see your application in action.

## Step 3: Understanding the File Structure

Next.js has a specific file structure you should become familiar with:

- **pages/**: This directory contains your application's pages. Next.js uses a 
  file-based routing system, where each .js, .jsx, .ts, or .tsx file in this 
  directory automatically becomes a route.
- **public/**: Static assets like images and fonts can be placed in this 
  directory. They are accessible at the root URL of your application.
- **styles/**: This directory is for your CSS files. Next.js supports CSS 
  Modules out of the box, allowing for locally scoped CSS.

## Step 4: Creating a New Page

To create a new page, simply add a new file under the \`pages/\` directory. For 
example, creating \`about.js\` will automatically create a route /about. Here's 
a simple example of what \`pages/about.js\` might look like:

\`\`\`
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our Next.js project.</p>
    </div>
  );
}
\`\`\`

## Step 5: Adding Static Assets

Place your static assets, such as images, in the \`public/\` directory. You can 
reference them in your application using the root URL. For example, if you add 
an image \`logo.png\` to \`public/images/\`, you can display it in your 
application like this:

\`\`\`
<Image src="/images/logo.png" alt="Logo" width={500} height={500} />
\`\`\`

## Step 6: Deploying Your Next.js Application

Next.js applications can be deployed to a variety of hosting services. Vercel 
(the creators of Next.js) offers a seamless deployment experience. To deploy 
your application, push your code to a Git repository and import it into Vercel.

Another popular option is to use Netlify:
1. Push your project to a Git repository (GitHub, GitLab, Bitbucket).
2. Sign up for Netlify and choose to "Import an existing project".
3. Connect your Git repository and configure the build settings (usually, the 
  defaults are fine).
4. Deploy your site.

## Conclusion

Next.js offers a robust solution for developing React applications with 
server-side rendering, static site generation, and more. By following the steps 
outlined in this guide, you can set up, develop, and deploy a Next.js project 
with ease. Explore the [Next.js documentation](https://nextjs.org/docs) for more
advanced features and customization options.

`
  const html = converter.makeHtml(text)

  return (
    <main className="container">
      <article
        className={`mx-auto prose prose-zinc prose-p:text-foreground 
                    prose-headings:text-foreground prose-li:text-foreground 
                    prose-strong:text-foreground prose-a:text-foreground 
                    dark:prose-invert max-w-[900px]`}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  )
}

# Blog feature on a react app using Dev.to as a Headless CMS

To fully understand this repository, I am assuming you are aware of the Headless CMS architecture and React.

## Headless CMS architecture

Headless CMS is an approach to decouple where content is stored from where it is presented. I decided to build a portfolio application to show some of my previous work and skills. Thinking about the features present on this portfolio and, knowing that the software development career is <b> an endless road learning journey</b>, why not register things I was learning? Why not share this?

I should write a blog and couple it with this portfolio, I thought...

## The cheaper and best approach for this endeavor

I had some decisions around the technology to take. Some points that were important to me, like:

As little effort as possible: Didn't want to handle hosting or a full-featured headless CMS somewhere like a whole WordPress.org. I have plenty of work to do, <b>don't need to overenginnering this project</b>;
Write posts in markdown: in case I decided to move content in the future, don't want to have to format everything again;
- Distribute the content: Traffic is important, I want the content to be published on one platform that has traffic from developers;
- Want the content available on my personal portfolio.
- After considering the best and cheaper options available, I found DEV.to and decided to use it to store my articles.

The DEV.to API is open, which means I can easily use it and get that content into my portfolio without much effort. Posts are written in markdown and already have heavy traffic from other developers.

Decision made, time to get to work!

## Dev.to as Headless CMS

In this feature for my portfolio, my dev account performs the role of CMS, and the content is presented in a React App. In other words, the backend is powered by Dev.To , the frontend is made using ReactJs and is hosted on Vercel.

As I already had a portfolio running made using React, I had to create new components and routes to implement this 'articles' feature.

The first step was to create the component Posts.js. On this component, we will use the React hooks useEffect and useState.

In the Posts.js component, we will get the data from Dev.to. I could use two different methods of making network requests: either Fetch or Axios. I decided to use Fetch, as you can see below:


As everything is working as expected:
  
The result can be seen at my portfolio on articles page.
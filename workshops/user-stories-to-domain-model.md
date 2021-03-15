# From User Stories to a Domain Model


### Learning Objectives
- Give the structure of a User Story
- Extract a Domain Model from User Stories

### Intro

A **User Story** describes one thing a program is expected to do, from the perspective of somebody using that program. When planning a program, the client's requirements will be decomposed into many User Stories. Much of a developer's life is spent translating User Stories into a functional system. In Object-Oriented Programming, these systems are made up of Objects and Messages. Objects describe the objects within the system, and Messages describe how those objects interact. We call these systems **Domain Models**.

Here is a type of user story:

```
As a user,
So I can find a specific cohort,
I want to search a list of all cohorts by a cohort name.
```

And here is a functional representation of that story:

Objects  | Messages
------------- | -------------
User  |
CohortList  | find_by_cohort_name

## Instructions
Translate these two user stories into a functional representation:

```
As a supermarket shopper,
So that I can buy items,
I'd like to add items to my basket.

As a careful individual,
So that I can stay in good health,
I'd like to know if my basket if full before trying to add another item to my basket
```

- [ ] Write down all the **nouns** and then all the **verbs** in the User Stories
- [ ] Draw a table like the one above and then organise the nouns and verbs into **objects** and **messages** within the table
- [ ] Draw a box and arrow diagram or a [sequence diagram](https://en.wikipedia.org/wiki/Sequence_diagram) that shows how your objects will use messages to communicate with one another
- [ ] Show it to someone in your cohort or coach and see if it makes sense to them.

### Further work
 - [ ] There are different ways to model domains. Find another way to do it: investigate [more techniques](https://developer.ibm.com/articles/an-introduction-to-uml/).

### Resources
- [Introduction to User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)
- [Explain Like I'm 5 - Object-Oriented Programming](https://www.reddit.com/r/explainlikeimfive/comments/1pyhng/eli5_objected_oriented_programming/)

# Web App: WineDay

This repo contains the front-end for a fictional wine e-commerce store built for a fictional business: WineDay. It was developed with React and deployed on Netlify.

The other relavant repos can be found here:

- [Backend](https://github.com/angieloux/wineday-back-end) (created with Ruby on Rails, hosted on heroku)
- [Planning documentation](https://github.com/angieloux/wineday-docs) (which can also be found at the bottom of this document, for reference).

# Links

- [Deployed website](https://wineday.netlify.app/)
- [Trello board](https://trello.com/b/7TaAyqk8/t3a2)
- [This front-end repo](https://github.com/angieloux/wineday-front-end)
- [The back-end repo](https://github.com/angieloux/wineday-back-end)
- [Original planning repository](https://github.com/angieloux/wineday-docs)
- [User testing workbook](https://docs.google.com/spreadsheets/d/e/2PACX-1vTbDicEG5nChHB6cVBtfCqUXtTXXtG7mIQkaQ5SaVdKJujoLzqwBdMsFHrW3Xwj4msacdTLbfFt1of1/pubhtml) containing multiple stages of user testing, including 3 development stages and 2 production stages.
-

# Local installation

If you would like to install a local copy of this web app, you will also need to locally host the Ruby on Rails back end server (instructions can be found in the [back-end repo](https://github.com/angieloux/wineday-back-end)).

Clone the repo:

    git clone git@github.com:angieloux/wineday-front-end.git

Navigate to the correct directory you just cloned:

    cd wineday-front-end

Using your preferred package manager, install dependencies.

With yarn:

    yarn install

With NPM:

    npm install

To run it locally in development mode:

    yarn start

# Testing

Unit tests have been included for various helper functions within the app. You can see these in action with your preferred package manager.

With yarn:

    yarn test

With NPM:

    npm test

# Updated project details

Due to time constraints the web app has deviated slightly from the original planning documentation as set out in the docs repo. Whilst most features are implemented, the scope of these will be significantly expanded in the coming weeks. These changes are listed below:

### Searching

Searching and filtering has not yet been incorporated into the app, though a Search component is currently being built.

### User management

As mentioned in the original planning phase, an admin role was never considered to be a part of the MVP. Thus, it was not focused on in this version of the app.

### Checkout process

The checkout process right now is a mockup of what is to come, as Stripe will be implemented as the payments platform. After searching/filtering is implemented, this will be done.

# Dependencies

- **React version:** 18.2.0

##### Key React Dependencies

| Dependency        | Version | use                                                                                               |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------- |
| react-router      | 6.3.0   | Routing                                                                                           |
| react-scripts     | 5.0.1   | Run the build tools required to transform React JSX syntax into plain JavaScript programmatically |
| axios             | 0.27.2  | HTTP requests from node.js or XMLHttpRequests from the browser                                    |
| bulma             | 0.9.4   | Styling                                                                                           |
| styled-components | 5.3.5   | Styling                                                                                           |
| stripe\*          | 10.0.0  | Payments                                                                                          |

\*(in development)

- ECMAScript 2020 (ES11)
- Hosted on Netlify (front-end)

### Back-end

#### Ruby on Rails

- **Rails version:** 6.1.6
- **Ruby version:** 2.7.5p203

##### Key Rails Dependencies

| Dependency       | Version | Use                          |
| ---------------- | ------- | ---------------------------- |
| bcrypt           | 3.1.7   | Authentication               |
| jwt              | 2.4.1   | Authorization                |
| rack-cors        | 1.1.1   | Make cross domain AJAX calls |
| database_cleaner | 2.0.1   | Clean database               |
| factory_bot      | 6.2.1   | Testing                      |
| rspec-rails      | 5.1.2   | Testing                      |
| shoulda-matchers | 5.1.0   | Testing                      |

- Hosted on Heroku (back-end)
- Database: PostgreSQL

### Development tools

- VSCode
- git

## User Testing

Testing has been carried out throughout all stages of the project, from development throguh to production. A testing spreadsheet can be found [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vTbDicEG5nChHB6cVBtfCqUXtTXXtG7mIQkaQ5SaVdKJujoLzqwBdMsFHrW3Xwj4msacdTLbfFt1of1/pubhtml#). A pdf version of all pages are also saved within the docs/user_testing section of this repo.

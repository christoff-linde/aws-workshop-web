## IMY772 AWS Mini Workshpp

_Christoff Linde, 18163841_

### Using The Site

#### Face Detection

Any image containing one or more celebrities can be uploaded. The image will be analyzed and the celebrities will be detected, with the names of the detected celebrities being displayed.

### Chatbot

The chatbot can either be used to book a car or a hotel room.

### Tech Stack

| Tech                                                                         | Use                                         |
| ---------------------------------------------------------------------------- | ------------------------------------------- |
| [GatsbyJS](https://www.gatsbyjs.org/)                                        | Frontend framework built on React           |
| [TailwindCSS](https://tailwindcss.com/)                                      | Styling framework                           |
| [Amplify UI](https://ui.docs.amplify.aws/react/getting-started/installation) | Frontend styling for AWS                    |
| [AWS Amplify](https://aws.amazon.com/amplify/)                               | Hosting the backend and frontend using AWS  |
| [AWS IAM](https://aws.amazon.com/iam/)                                       | Setting up users and roles                  |
| [AWS Lex](https://aws.amazon.com/lex/)                                       | Setting up the chatbot                      |
| [AWS Rekognition](https://aws.amazon.com/rekognition/)                       | Service for detecting celebrities in images |

### Project Setup

#### The Frontend

The front-end is built using GatsbyJS and TailwindCSS.

To create a new gatsby project, the `gatsby-cli` is needs to be installed.

The `gatsby-cli` can be installed with the following command:

```bash
npm install -g gatsby-cli
```

Additional prerequisites includes `Git`, `Node`, and `npm`.

After installing the `gatsby-cli`, the following command can be used to create a new gatsby project:

```bash
npm init gatsby
```

When promted, choose to use Typescript with the project. Default commands are suitable for the other options.

#### Amplify

- need to create an account

Before hosting can be added, you need to create a AWS Console account. After sigining as the root user, it is best practice to make a IAM user for the project.

The IAM user needs to have to relevant permissions to create, access, and provision the necesary resources for the project. Some of the permissions includes:

- IAM
- AmazonS3
- AWSLambda
- AmazonLex
- AdministratorAccess-Amplify

##### Setup Hosting

For hosting, AWS Amplify will be used. Amplify will host the frontend web app, as well as the required backend resources.

The frontend code is hosted in a GitHub repo which is linked to Amplify. On successfully linking the repo, the site will be built and deployed to a specific URL.

#### The Backend

To provision and create the backend resources, amplify needs to be configured from the CLI with the following command:

```bash
amplify configure
```

After the above command has completed successfully, the following commands will add the necessary resources to the project:

```bash
amplify add auth
amplify add interactions
amplify add predictions
```

This will add Auth (Cognito), Interactions (Amazon Lex), and Predictions (AWS Rekognition) to the project. The resources will be added locally, and will need to be updated in the cloud.

This can be done with:

```bash
amplify push
```

The full project should now be setup.

### Additional Links

[GatsbyJS Installation](https://www.gatsbyjs.com/docs/tutorial/part-0/#installation-guide)

[TailwindCSS Setup](https://tailwindcss.com/docs/installation)

[Celebrity Face ID Setup](https://docs.amplify.aws/lib/predictions/identify-entity/q/platform/js/#advanced-configuration)

[Chatbot Setup](https://docs.amplify.aws/lib/interactions/getting-started/q/platform/js/)


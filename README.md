# Google Cloud Functions Tutorial

## Setup

* Redeem your $50 credit by going to bit.ly/gcp-redeem

* Enter the code and make a new project

* Open up the CloudShell editor:
    * https://console.cloud.google.com/cloudshell/editor?project=[PROJECT_ID]

## Make the app

Now we can customize our game

* Clone the sample repo:
    * `git clone https://github.com/campionfellin/functions-tutorial`

* Change directory into the repo:
    * `cd functions-tutorial`

* Edit the code:
    * `edit index.js`

## Deploy the app

Now we can deploy the game

* Make sure your app is configured
    * `gcloud config list`
    * You should see `project = [PROJECT_ID]`

* Deploy one function at a time:
    * `gcloud functions deploy functionName --trigger-http`
    * (The first time you may need to enable Cloud Functions)

* Open up the URL and play your game!

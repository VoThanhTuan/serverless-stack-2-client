const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-koowtywk4gjf"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://dtay3fba6d.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_luxMd1Ml0",
    APP_CLIENT_ID: "7p8c9cl083c5nud1quiuja2mgf",
    IDENTITY_POOL_ID: "us-east-2:801176ad-b2c6-41af-99dc-65a0c441fcd7"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1vr82sz6tbcmv"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://3g9ynxfkj2.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_inY1fiexi",
    APP_CLIENT_ID: "5buq0tpqputuphoc6776uku4sq",
    IDENTITY_POOL_ID: "us-east-2:3ce987d1-e07d-4595-9040-ad63133d9eb2"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

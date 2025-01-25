// src/app/types/amplify.d.ts

/**
 * Placeholder type definitions for AWS Amplify,
 * if you use @aws-amplify/auth or other Amplify libs.
 */

declare namespace AmplifyConfig {
    interface Auth {
        region: string;
        userPoolId: string;
        userPoolWebClientId: string;
    }
}

export {};

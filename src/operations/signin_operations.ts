export interface SignInOperations {
    // Enters the username and password and submits the form
    signIn(username: string, password: string): void;
 
    // Checks if the sign-in prompt is visible
    isSignInPromptVisible(): boolean;
 
    // Optionally, checks for a successful sign-in message
    isSignInSuccessful(): Boolean;
}

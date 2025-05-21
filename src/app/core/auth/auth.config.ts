import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '1008177725040-bkm1deoi9a0hau1mr6p8urt47c7i9grj.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}
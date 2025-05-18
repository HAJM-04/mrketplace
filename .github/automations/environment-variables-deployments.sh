# Variables de entorno (cámbialas a tu valor real o úsalas directamente)
API_KEY="AIzaSy…TU_API_KEY…"
AUTH_DOMAIN="marketplace-a9ab1.firebaseapp.com"
PROJECT_ID="marketplace-a9ab1"
STORAGE_BUCKET="marketplace-a9ab1.firebasestorage.app"
MESSAGING_SENDER_ID="852699536174"
APP_ID="1:852699536174:web:1ba257ec00e641d62df8bf"
MEASUREMENT_ID="G-Y07CXG90G3"
SERVICE_ACCOUNT_FILE="path/to/firebase-service-account-marketplace-a9ab1.json"

# Crea cada secreto en tu repo actual
gh secret set FIREBASE_API_KEY              --body "$API_KEY"
gh secret set FIREBASE_AUTH_DOMAIN          --body "$AUTH_DOMAIN"
gh secret set FIREBASE_PROJECT_ID           --body "$PROJECT_ID"
gh secret set FIREBASE_STORAGE_BUCKET       --body "$STORAGE_BUCKET"
gh secret set FIREBASE_MESSAGING_SENDER_ID  --body "$MESSAGING_SENDER_ID"
gh secret set FIREBASE_APP_ID               --body "$APP_ID"
gh secret set FIREBASE_MEASUREMENT_ID       --body "$MEASUREMENT_ID"

# Para el Service Account (JSON), usamos --body-file
gh secret set FIREBASE_SERVICE_ACCOUNT_MARKETPLACE_A9AB1 \
    --body-file "$SERVICE_ACCOUNT_FILE"

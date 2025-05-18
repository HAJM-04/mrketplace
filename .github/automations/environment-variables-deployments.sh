# Variables de entorno (en WSL puedes exportarlas o escribir directamente su valor)
API_KEY="AIzaSyAiGP5BPOz1hE9RSqEcg_isn1MjbOuo2d4"
AUTH_DOMAIN="marketplace-a9ab1.firebaseapp.com"
PROJECT_ID="marketplace-a9ab1"
STORAGE_BUCKET="marketplace-a9ab1.firebasestorage.app"
MESSAGING_SENDER_ID="852699536174"
APP_ID="1:852699536174:web:1ba257ec00e641d62df8bf"
MEASUREMENT_ID="G-Y07CXG90G3"
SA_PATH="/mnt/c/Users/User/OneDrive/Documents/github/marketplace/serviceAccountKey.json"

# Crea los secrets de texto
gh secret set FIREBASE_API_KEY             -b "$API_KEY"
gh secret set FIREBASE_AUTH_DOMAIN         -b "$AUTH_DOMAIN"
gh secret set FIREBASE_PROJECT_ID          -b "$PROJECT_ID"
gh secret set FIREBASE_STORAGE_BUCKET      -b "$STORAGE_BUCKET"
gh secret set FIREBASE_MESSAGING_SENDER_ID -b "$MESSAGING_SENDER_ID"
gh secret set FIREBASE_APP_ID              -b "$APP_ID"
gh secret set FIREBASE_MEASUREMENT_ID      -b "$MEASUREMENT_ID"

# Para el JSON, mete todo su contenido con cat:
gh secret set FIREBASE_SERVICE_ACCOUNT_MARKETPLACE_A9AB1 \
  -b "$(cat "$SA_PATH")"

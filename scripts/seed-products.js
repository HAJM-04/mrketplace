// 1) Install dotenv and firebase-admin
// Required instead of import because this file is executed with node
require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

// 2) Read environment variables Service account route described inside .env
const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!keyPath) {
  console.error('❌ GOOGLE_APPLICATION_CREDENTIALS does not exist inside .env file');
  process.exit(1);
}

// 3) Inicializa el Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// 4) Initialize Firestore
const db = admin.firestore();

// 5) Data set definition
const newProducts = [
  {
    id: '4',
    title: 'Covenant Coach Jacket',
    description: `"Covenant" is track #5 of the album "Of Demons & Mortals."`,
    price: 100,
    'image-front': 'https://drive.google.com/uc?export=view&id=TU_ID_FRONT_2',
    'image-back' : 'https://drive.google.com/uc?export=view&id=TU_ID_BACK_2',
    'size_s': 'S',
    'size_m': 'M',
    'size_l': 'L',
  },
  {
    id: '5',
    title: 'Covenant Tee Shirt',
    description: `"Covenant" is track #5 of the album "Of Demons & Mortals."`,
    price: 45,
    'image-front': 'https://drive.google.com/uc?export=view&id=TU_ID_FRONT_3',
    'image-back' : 'https://drive.google.com/uc?export=view&id=TU_ID_BACK_3',
    'size_s': 'S',
    'size_m': 'M',
    'size_l': 'L',
  },
];


// 6) Add the products to the collection
async function seed() {
  try {
    const prodCollection = db.collection('cloth-store');
    for (const p of newProducts) {
      const snap = await prodCollection.where('id', '==', p.id).get(); 
      if (snap.empty) {
        await prodCollection.add(p);
        console.log(`✅ Product number ${p.id} created`);
      } else {
        console.log(`ℹ️  The product number ${p.id} already exist, ommitted.`);
      }
    }
    console.log('🎉 Seed completed');
    process.exit(0);
  } catch (e) {
    console.error('❌ Error seed:', e);
    process.exit(1);
  }
}

// 7) Execute the function
seed();

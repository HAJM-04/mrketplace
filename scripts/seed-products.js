// scripts/seed-products.js
require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');
const path = require('path');

// 1) Lee la ruta al service account desde el .env
const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!keyPath) {
  console.error('❌ No se encontró GOOGLE_APPLICATION_CREDENTIALS en tu .env');
  process.exit(1);
}

// 3) Inicializa el Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


// 4) Define sólo los productos que faltan (ID “2” y “3”)
const newProducts = [
  {
    id: '2',
    title: 'Covenant Coach Jacket',
    description: `"Covenant" is track #5 of the album "Of Demons & Mortals."`,
    price: 100,
    'image-front': 'https://drive.google.com/uc?export=view&id=TU_ID_FRONT_2',
    'image-back' : 'https://drive.google.com/uc?export=view&id=TU_ID_BACK_2',
  },
  {
    id: '3',
    title: 'Covenant Tee Shirt',
    description: `"Covenant" is track #5 of the album "Of Demons & Mortals."`,
    price: 45,
    'image-front': 'https://drive.google.com/uc?export=view&id=TU_ID_FRONT_3',
    'image-back' : 'https://drive.google.com/uc?export=view&id=TU_ID_BACK_3',
  },
];

async function seed() {
  try {
    for (const p of newProducts) {
      const ref = await db.collection('cloth-store').add(p);
      const snap = await ref.get();
      if (!snap.exists) {
        await ref.set(p);
        console.log(`✅ Creado producto ${p.id}`);
      } else {
        console.log(`ℹ️  El producto ${p.id} ya existe, lo omitimos.`);
      }
    }
    console.log('🎉 Seed completo');
    process.exit(0);
  } catch (e) {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  }
}

seed();

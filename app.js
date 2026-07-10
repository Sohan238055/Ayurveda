const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

let medicines = 
[
  {
    "name": "ashwagandha",
    "image": "https://images.unsplash.com/photo-1611073166148-9c6546620ca1?w=500&q=80",
    "uses": ["Reduces stress and anxiety", "Improves energy and stamina", "Boosts brain function"],
    "benefits": ["Lowers cortisol levels", "Enhances muscle mass and strength", "Improves sleep quality"]
  },
  {
    "name": "turmeric",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&q=80",
    "uses": ["Anti-inflammatory", "Boosts immunity", "Improves skin health"],
    "benefits": ["Neutralizes free radicals", "Supports joint mobility", "Promotes natural skin glow"]
  },
  {
    "name": "tulsi",
    "image": "https://images.unsplash.com/photo-1600431521340-491eca880813?w=500&q=80",
    "uses": ["Relieves cough and cold", "Supports respiratory health", "Antioxidant protection"],
    "benefits": ["Clears respiratory congestion", "Acts as a natural fever reducer", "Helps adapt to psychological stress"]
  },
  {
    "name": "amla",
    "image": "https://images.unsplash.com/photo-1623945419992-a1f94df2237d?w=500&q=80",
    "uses": ["Rich source of Vitamin C", "Improves digestion", "Promotes hair growth"],
    "benefits": ["Strengthens hair roots", "Enhances nutrient absorption", "Retards aging process"]
  },
  {
    "name": "neem",
    "image": "https://images.unsplash.com/photo-1563201412-1457f920f068?w=500&q=80",
    "uses": ["Purifies blood", "Treats skin disorders", "Antimicrobial protection"],
    "benefits": ["Clears acne and blemishes", "Destroys internal parasites", "Supports oral health"]
  },
  {
    "name": "brahmi",
    "image": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80",
    "uses": ["Enhances memory and focus", "Calms the nervous system", "Reduces mental fatigue"],
    "benefits": ["Sharpens intellect and retention", "Relieves hyper-reactivity", "Supports sound sleep patterns"]
  },
  {
    "name": "shatavari",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
    "uses": ["Supports female reproductive health", "Balances hormones", "Improves vitality"],
    "benefits": ["Promotes lactation in nursing mothers", "Eases menopausal symptoms", "Nourishes the reproductive organs"]
  },
  {
    "name": "triphala",
    "image": "https://images.unsplash.com/photo-1563483783225-bf568b209d22?w=500&q=80",
    "uses": ["Gentle laxative and detoxifier", "Improves digestion", "Supports eye health"],
    "benefits": ["Regulates bowel movements", "Removes accumulated toxins", "Cleanses the colon"]
  },
  {
    "name": "giloy",
    "image": "https://images.unsplash.com/photo-1584036561566-baf241f1948d?w=500&q=80",
    "uses": ["Boosts immunity", "Manages chronic fevers", "Removes toxins"],
    "benefits": ["Increases platelet count", "Reduces allergic rhinitis symptoms", "Maintains healthy blood sugar levels"]
  },
  {
    "name": "ginger",
    "image": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&q=80",
    "uses": ["Relieves nausea", "Kindles digestive fire", "Reduces joint pain"],
    "benefits": ["Alleviates motion sickness", "Reduces menstrual cramp severity", "Eases flatulence and bloating"]
  },
  {
    "name": "licorice",
    "image": "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=500&q=80",
    "uses": ["Soothes sore throat", "Heals gastric ulcers", "Expectorant properties"],
    "benefits": ["Protects stomach lining from acidity", "Loosens sticky mucus", "Soothes irritated mucous membranes"]
  },
  {
    "name": "guggulu",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80",
    "uses": ["Lowers cholesterol", "Reduces joint inflammation", "Supports weight management"],
    "benefits": ["Purifies lipids in the blood", "Relieves arthritic swelling", "Stimulates thyroid activity for metabolism"]
  },
  {
    "name": "arjuna",
    "image": "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=500&q=80",
    "uses": ["Strengthens heart muscles", "Regulates blood pressure", "Improves cardiovascular circulation"],
    "benefits": ["Tones the cardiac muscles", "Reduces angina symptoms", "Speeds up healing of fractured bones"]
  },
  {
    "name": "aloevera",
    "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80",
    "uses": ["Soothes skin burns", "Acts as a liver tonic", "Relieves constipation"],
    "benefits": ["Hydrates dull and dry skin", "Stimulates bile secretion", "Accelerates wound healing"]
  },
  {
    "name": "safed musli",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
    "uses": ["Improves libido and vigor", "Acts as a natural body revitalizer", "Combats fatigue"],
    "benefits": ["Enhances physical endurance", "Supports healthy weight gain", "Acts as an adaptogen for strength"]
  },
  {
    "name": "shilajit",
    "image": "https://images.unsplash.com/photo-1564278047294-53344b5574cc?w=500&q=80",
    "uses": ["Increases physical strength", "Anti-aging properties", "Boosts testosterone"],
    "benefits": ["Improves cellular energy production", "Enhances iron absorption", "Combats chronic fatigue syndrome"]
  },
  {
    "name": "moringa",
    "image": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&q=80",
    "uses": ["Rich in vitamins and minerals", "Reduces joint swelling", "Lowers blood sugar levels"],
    "benefits": ["Supports bone density", "Improves liver function", "Reduces inflammation in the body"]
  },
  {
    "name": "cardamom",
    "image": "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=500&q=80",
    "uses": ["Refreshes breath", "Relieves bloating and gas", "Aids in detoxification"],
    "benefits": ["Prevents bad breath causing bacteria", "Eases burning sensations in digestion", "Acts as a diuretic to flush kidneys"]
  },
  {
    "name": "manjistha",
    "image": "https://images.unsplash.com/photo-1611073166921-2e639893d5b0?w=500&q=80",
    "uses": ["Deep skin detoxifier", "Brightens complexion", "Purifies lymphatic system"],
    "benefits": ["Clears up skin hyperpigmentation", "Balances menstrual blood flow", "Reduces toxic heat in the body"]
  },
  {
    "name": "gotu kola",
    "image": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80",
    "uses": ["Improves blood circulation", "Heals wounds", "Boosts cognitive function"],
    "benefits": ["Strengthens veins and capillaries", "Reduces stretch marks and scars", "Decreases mental anxiety"]
  }
];


app.get('/', (request, response) => {
    response.json(medicines);
});

app.get('/:name', (request, response) => {
    let name = request.params.name;
    let medicine = medicines.find(m => m.name.toLowerCase() === name.toLowerCase());

    if (medicine) {
        response.json(medicine);
    }
    response.json({"Message" : "Medicine not found" });
    
});

app.listen(5000, ()=>{
    console.log('localhost:5000');
});
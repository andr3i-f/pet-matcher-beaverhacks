# Pet Matcher

Pet Matcher helps users find their perfect pet companion by analyzing preferences from selected images and matching them with available adoptable animals in their area.

![Pet Matcher Logo](/public/images/dogImage.png)

## 🐾 Features

- **Image Selection**: Choose from a variety of pet images that appeal to you
- **Location-Based Matching**: Uses your location to find adoptable pets near you
- **AI-Powered Recommendations**: Analyzes your preferences to find the perfect pet match
- **Direct Adoption Links**: Connect directly with shelters to adopt your matched pet

## 🚀 Live Demo

Visit the deployed application at: [Pet Matcher App](https://pet-matcher-beaverhacks.vercel.app/)

## 🔧 Technologies Used

- **Frontend**:
  - Next.js
  - React
  - TypeScript
  - TailwindCSS

- **Backend**:
  - Node.js
  - Express
  - Google Cloud (Gemini AI)
  - PetFinder API

- **Deployment**:
  - Vercel

## 📋 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/andr3i-f/pet-matcher-beaverhacks.git
cd pet-matcher-beaverhacks
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_URL=https://pawfect-match-pi.vercel.app/submitForm
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```


## 📂 Project Structure

```
pet-matcher/
├── public/                # Static assets
├── src/                   # Source files
│   ├── app/               # Next.js app router components
│   ├── components/        # Reusable UI components
│   └── context/           # React context providers
├── context/               # Location and other context providers
├── .env.local             # Environment variables (create this file locally)
├── next.config.js         # Next.js configuration
└── README.md              # Project documentation
```

## 🔌 Backend API

The Pet Matcher backend API is available at: 
[https://pawfect-match-pi.vercel.app](https://pawfect-match-pi.vercel.app)

The backend repository can be found here: 
[Pet Matcher Backend](https://github.com/M005A/pet-matcher-backend)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- [PetFinder API](https://www.petfinder.com/developers) for providing adoptable pet data
- [Google Gemini AI](https://deepmind.google/technologies/gemini) for pet matching algorithms
- The BeaverHacks hackathon for the inspiration

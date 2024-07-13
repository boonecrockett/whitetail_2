const { useState } = React;

const Alert = ({ children, className }) => (
    <div className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 ${className}`} role="alert">
        {children}
    </div>
);

const AlertTitle = ({ children }) => (
    <h3 className="font-bold">{children}</h3>
);

const AlertDescription = ({ children }) => (
    <p>{children}</p>
);

const questions = [
    {
        question: "What is the average lifespan of a whitetail deer in the wild?",
        choices: [
            "2-3 years",
            "4-6 years",
            "8-10 years",
            "12-15 years"
        ],
        correctAnswer: 1,
        explanation: "The average lifespan of a whitetail deer in the wild is 4-6 years, although they can live up to 10 years or more in ideal conditions."
    },
    {
        question: "Which of the following is NOT a common food source for whitetail deer?",
        choices: [
            "Acorns",
            "Soybeans",
            "Pine needles",
            "Mushrooms"
        ],
        correctAnswer: 2,
        explanation: "While deer may occasionally eat pine needles, they are not a common food source. Acorns, soybeans, and mushrooms are all regular parts of a whitetail deer's diet."
    },
    {
        question: "What is the gestation period for whitetail deer?",
        choices: [
            "About 100 days",
            "About 150 days",
            "About 200 days",
            "About 250 days"
        ],
        correctAnswer: 2,
        explanation: "The gestation period for whitetail deer is about 200 days (6.5 to 7 months)."
    },
    {
        question: "Which sense is most acute in whitetail deer?",
        choices: [
            "Sight",
            "Hearing",
            "Smell",
            "Taste"
        ],
        correctAnswer: 2,
        explanation: "While deer have good eyesight and hearing, their sense of smell is their most acute sense, capable of detecting odors from great distances."
    },
    {
        question: "What is the primary mating season for whitetail deer called?",
        choices: [
            "Estrus",
            "Rut",
            "Heat",
            "Breeding time"
        ],
        correctAnswer: 1,
        explanation: "The primary mating season for whitetail deer is called the rut, which typically occurs in the fall."
    },
    {
        question: "Which of these is NOT a factor that influences antler growth?",
        choices: [
            "Age",
            "Nutrition",
            "Genetics",
            "Moon phase"
        ],
        correctAnswer: 3,
        explanation: "Age, nutrition, and genetics all play significant roles in antler growth. The moon phase does not directly influence antler development."
    },
    {
        question: "What is the term for a deer's bed or resting place?",
        choices: [
            "Nest",
            "Lair",
            "Form",
            "Den"
        ],
        correctAnswer: 2,
        explanation: "A deer's bed or resting place is called a form. It's typically a shallow depression in grass or leaves where the deer lies down."
    },
    {
        question: "How often do whitetail bucks typically shed their antlers?",
        choices: [
            "Every 6 months",
            "Annually",
            "Every 2 years",
            "They don't shed their antlers"
        ],
        correctAnswer: 1,
        explanation: "Whitetail bucks shed their antlers annually, typically in late winter or early spring, and grow a new set each year."
    },
    {
        question: "What is the process of a deer marking its territory with scent called?",
        choices: [
            "Scraping",
            "Rubbing",
            "Scenting",
            "Marking"
        ],
        correctAnswer: 0,
        explanation: "The process of a deer marking its territory with scent is called scraping. Bucks create scrapes on the ground and leave scent from glands on their head and hooves."
    },
    {
        question: "Which of these is NOT a type of vocalization made by whitetail deer?",
        choices: [
            "Grunt",
            "Bleat",
            "Snort",
            "Howl"
        ],
        correctAnswer: 3,
        explanation: "Whitetail deer make various vocalizations including grunts, bleats, and snorts, but they do not howl. Howling is typically associated with canines like wolves or coyotes."
    },
    {
        question: "What is the term for a group of deer?",
        choices: [
            "Herd",
            "Flock",
            "Pack",
            "School"
        ],
        correctAnswer: 0,
        explanation: "A group of deer is called a herd. This term is used for many hoofed mammals that live in groups."
    },
    {
        question: "Which of these is NOT a common predator of adult whitetail deer?",
        choices: [
            "Coyotes",
            "Wolves",
            "Mountain lions",
            "Eagles"
        ],
        correctAnswer: 3,
        explanation: "While eagles may occasionally prey on very young fawns, they are not common predators of adult whitetail deer. Coyotes, wolves, and mountain lions are all potential predators of adult deer."
    },
    {
        question: "What is the primary reason for a buck's antlers?",
        choices: [
            "Defense against predators",
            "Attracting mates",
            "Foraging for food",
            "Regulating body temperature"
        ],
        correctAnswer: 1,
        explanation: "While antlers can serve multiple purposes, their primary function is for attracting mates and competing with other bucks during the breeding season."
    },
    {
        question: "What is the average weight of an adult male whitetail deer?",
        choices: [
            "50-100 lbs",
            "100-150 lbs",
            "150-300 lbs",
            "300-500 lbs"
        ],
        correctAnswer: 2,
        explanation: "The average weight of an adult male whitetail deer (buck) ranges from 150 to 300 pounds, depending on age, habitat, and geographic location."
    },
    {
        question: "What is the term for a deer's ability to grow new antlers?",
        choices: [
            "Antlerogenesis",
            "Ossification",
            "Calcification",
            "Regeneration"
        ],
        correctAnswer: 0,
        explanation: "The process of growing new antlers is called antlerogenesis. It's one of the fastest known types of tissue growth in mammals."
    },
    {
        question: "Which of these is NOT a common habitat for whitetail deer?",
        choices: [
            "Deciduous forests",
            "Agricultural fields",
            "Desert scrublands",
            "Suburban areas"
        ],
        correctAnswer: 2,
        explanation: "While whitetail deer are adaptable and can be found in various habitats, desert scrublands are not a common habitat. They prefer areas with a mix of forest and open land."
    },
    {
        question: "What is the process of a buck rubbing its antlers on trees called?",
        choices: [
            "Shedding",
            "Polishing",
            "Scraping",
            "Rubbing"
        ],
        correctAnswer: 3,
        explanation: "When a buck rubs its antlers on trees, it's called rubbing. This behavior serves to remove velvet from antlers and mark territory."
    },
    {
        question: "How many stomach chambers does a whitetail deer have?",
        choices: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correctAnswer: 3,
        explanation: "Like other ruminants, whitetail deer have four stomach chambers that allow them to digest tough plant material efficiently."
    },
    {
        question: "What is the term for a deer's white tail?",
        choices: [
            "Flag",
            "Beacon",
            "Signal",
            "Marker"
        ],
        correctAnswer: 0,
        explanation: "A deer's white tail is often referred to as a 'flag'. When raised, it serves as a warning signal to other deer and is highly visible as the deer bounds away."
    },
    {
        question: "What is the average home range size for a whitetail buck?",
        choices: [
            "0.5-1 square mile",
            "1-3 square miles",
            "5-10 square miles",
            "15-20 square miles"
        ],
        correctAnswer: 1,
        explanation: "The average home range for a whitetail buck is typically 1-3 square miles, although this can vary based on habitat quality and deer population density."
    }
];

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizComplete, setQuizComplete] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswer = (choiceIndex) => {
        setSelectedAnswer(choiceIndex);
        setShowExplanation(true);
        const correct = choiceIndex === questions[currentQuestion].correctAnswer;
        setIsCorrect(correct);
        if (correct) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const nextQuestion = () => {
        setShowExplanation(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
            setQuizComplete(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowExplanation(false);
        setSelectedAnswer(null);
        setQuizComplete(false);
        setIsCorrect(null);
    };

    if (quizComplete) {
        return (
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Quiz Complete!</h1>
                <p className="text-xl mb-4">Your final score: {score} out of {questions.length}</p>
                <button
                    onClick={resetQuiz}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Whitetail Deer Quiz</h1>
            <p className="mb-4">Question {currentQuestion + 1} of {questions.length}</p>
            <p className="text-lg font-semibold mb-4">{currentQ.question}</p>
            <div className="space-y-2">
                {currentQ.choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-2 rounded ${
                            selectedAnswer === index
                                ? index === currentQ.correctAnswer
                                    ? 'bg-green-200'
                                    : 'bg-red-200'
                                : 'bg-gray-100 hover:bg-gray-200'
                        } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        {choice}
                    </button>
                ))}
            </div>
            {isCorrect !== null && (
                <p className={`mt-4 text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
            )}
            {showExplanation && (
                <Alert className="mt-4">
                    <AlertTitle>Explanation</AlertTitle>
                    <AlertDescription>
                        {currentQ.explanation}
                    </AlertDescription>
                </Alert>
            )}
            {showExplanation && (
                <button
                    onClick={nextQuestion}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
            )}
            <p className="mt-4">Current Score: {score} / {currentQuestion + 1}</p>
        </div>
    );
};

ReactDOM.render(<QuizApp />, document.getElementById('root'));
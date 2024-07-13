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
        question: "What is the purpose of the 'tip-to-tip spread' measurement in scoring whitetail deer antlers?",
        choices: [
            "It's added to the final score",
            "It determines the antler classification",
            "It's used for trophy qualification",
            "It's supplementary data not affecting the score"
        ],
        correctAnswer: 3,
        explanation: "The tip-to-tip spread measurement is supplementary data recorded on the score chart to give a more complete picture of antler conformation, but it does not affect the final score."
    },
    {
        question: "How is the 'greatest spread' of antlers measured?",
        choices: [
            "With a flexible tape measure",
            "By eye estimation",
            "Using a wall, carpenter's level, and straightedge",
            "It's calculated based on other measurements"
        ],
        correctAnswer: 2,
        explanation: "The greatest spread is measured by laying the rack against a vertical wall, using a carpenter's level to mark the widest point, and measuring with a straightedge."
    },
    {
        question: "What determines whether a point is counted in whitetail deer antler scoring?",
        choices: [
            "It must be at least 2 inches long",
            "It must be longer than it is wide at some location at least one inch from the tip",
            "It must be symmetrical with a point on the opposite antler",
            "It must arise from the top of the main beam"
        ],
        correctAnswer: 1,
        explanation: "A point is any projection at least one inch long and longer than wide at some location at least one inch from the tip of the projection."
    },
    {
        question: "What is the correct way to measure the length of the main beam?",
        choices: [
            "From the burr to the longest tine",
            "From the burr to the first point",
            "From the center of the burr along the outer side to the main beam tip",
            "As a straight line from burr to tip"
        ],
        correctAnswer: 2,
        explanation: "The length of the main beam is measured from the point where the center line of the antler along the outer side intersects the bottom edge of the burr, following the outer curve to the main beam tip."
    },
    {
        question: "How many circumference measurements are always taken on Coues' whitetail antlers?",
        choices: [
            "Two",
            "Three",
            "Four",
            "It varies based on the number of points"
        ],
        correctAnswer: 2,
        explanation: "Four and only four circumferences are always taken on Coues' whitetails, just like regular whitetails, regardless of the number of normal points."
    },
    {
        question: "What is done if there's excessive flaring near the ends of the main beams when measuring inside spread?",
        choices: [
            "The flared portion is ignored in the measurement",
            "The measurement is taken at the widest point regardless of flaring",
            "An average is taken between the flared and non-flared portions",
            "The inside spread is not measured in this case"
        ],
        correctAnswer: 0,
        explanation: "If an excessive/abnormal flare is present, the inside spread measurement cannot include spread caused by the excessive flaring of the antler beam. It's taken at the greatest inside spread from the location where the antler begins to diverge from the normal curvature."
    },
    {
        question: "How are webbed antlers measured for length?",
        choices: [
            "Along the outer edge of the webbing",
            "Through the center of the projected normal main beam",
            "As a straight line from base to tip",
            "Webbed antlers cannot be officially scored"
        ],
        correctAnswer: 1,
        explanation: "For webbed antlers, the measurer should imagine the normal main beam as if there was no webbing. The length measurement is then taken through the center of the projected main beam."
    },
    {
        question: "What is the minimum score for a typical Coues' whitetail to qualify for Boone and Crockett All-Time records?",
        choices: [
            "100",
            "110",
            "120",
            "130"
        ],
        correctAnswer: 1,
        explanation: "The minimum score for a typical Coues' whitetail to qualify for Boone and Crockett All-Time records is 110."
    },
    {
        question: "How are multiple or split brow tines handled in scoring?",
        choices: [
            "Both are measured as normal points",
            "The longer one is measured as the normal G-1",
            "They are both considered abnormal points",
            "They are averaged for a single G-1 measurement"
        ],
        correctAnswer: 1,
        explanation: "Only one projection of multiple or split brow tines can be measured as the normal brow point G-1. Generally, the one that best matches in shape and location of usual G-1 points (often the longer one) is chosen as the normal G-1 point."
    },
    {
        question: "What is the correct procedure if a normal point is broken off to less than an inch long?",
        choices: [
            "Estimate its original length",
            "Ignore it in the scoring",
            "Record a zero and note it in the Remarks section",
            "Consider it an abnormal point"
        ],
        correctAnswer: 2,
        explanation: "If a normal point has been broken off to less than an inch long, record a zero to indicate its condition and note the action in the Remarks section. This preserves the sequence and avoids any artificial penalty for non-symmetry."
    },
    {
        question: "How is the H-4 circumference measured if there are fewer than four normal points on an antler?",
        choices: [
            "It's not measured",
            "At the base of the last normal point",
            "Halfway between the last normal point and the beam tip",
            "At the narrowest point of the main beam"
        ],
        correctAnswer: 2,
        explanation: "If there are fewer than four measured normal points per antler, the H-4 circumference is taken on the main beam halfway between a point in the center of the beam, directly in the center of the G-3 point base and the beam tip."
    },
    {
        question: "What is the correct way to measure a curved antler point?",
        choices: [
            "Along the inside curve",
            "Along the outside curve",
            "As a straight line from base to tip",
            "By averaging the inside and outside measurements"
        ],
        correctAnswer: 1,
        explanation: "Antler points are measured along the outside of their curve in the center of the tine."
    },
    {
        question: "How are circumference measurements taken when an abnormal point arises between normal points?",
        choices: [
            "At the abnormal point",
            "At the narrowest location between normal points on either side of the abnormal point",
            "They are not taken in this case",
            "At the widest point near the abnormal growth"
        ],
        correctAnswer: 1,
        explanation: "When an abnormal point arises between normal points, the circumference measurements are taken at the narrowest location between normal points on either side of the abnormal point."
    },
    {
        question: "What is the minimum number of abnormal inches required for a Coues' whitetail to be classified as non-typical in Pope and Young?",
        choices: [
            "5 inches",
            "10 inches",
            "15 inches",
            "20 inches"
        ],
        correctAnswer: 0,
        explanation: "A Coues' whitetail must have 5 inches of abnormal points to be classified as non-typical in Pope and Young."
    },
    {
        question: "How is the inside spread credit determined if it exceeds the length of the longer main beam?",
        choices: [
            "The actual inside spread is used",
            "It's limited to the length of the longer main beam",
            "An average of the spread and beam length is used",
            "The inside spread is not included in the score"
        ],
        correctAnswer: 1,
        explanation: "If the inside spread measurement exceeds the longer main beam, record the longer main beam length as the spread credit. Spread credit cannot exceed the length of the longer antler main beam."
    },
    {
        question: "What is the correct procedure for measuring the greatest spread of palmated antlers?",
        choices: [
            "Measure across the widest part of the palms",
            "Measure from the main beams only, ignoring the palms",
            "Take multiple measurements and use the average",
            "Palmated antlers cannot be officially scored"
        ],
        correctAnswer: 0,
        explanation: "For palmated antlers, the greatest spread is measured across the widest part of the palms, using the same method as for typical antlers (wall and carpenter's level technique)."
    },
    {
        question: "How are non-typical points on a typical entry handled in scoring?",
        choices: [
            "They are ignored entirely",
            "They are added to the score",
            "They are subtracted from the score",
            "They are averaged with normal points"
        ],
        correctAnswer: 2,
        explanation: "For a typical entry, the total of the lengths of abnormal points is subtracted from the score as part of the differences calculation."
    },
    {
        question: "What is the correct way to establish the base line for measuring a point?",
        choices: [
            "Draw a straight line across the base",
            "Use the natural contour of the antler as a guide",
            "Measure from the lowest point of the base",
            "Take an average of multiple base lines"
        ],
        correctAnswer: 1,
        explanation: "Base lines should reflect the normal antler configuration as if the point was not present. A natural bending or curving of the opposite edge of the point or beam should be reflected in the base line."
    },
    {
        question: "How is the Final Score calculated for a non-typical whitetail?",
        choices: [
            "Sum of all measurements",
            "Sum of measurements minus differences",
            "Sum of measurements plus abnormal points",
            "Average of right and left antler scores"
        ],
        correctAnswer: 2,
        explanation: "For a non-typical whitetail, the Final Score is calculated by subtracting the differences from the subtotal of measurements and spread credit, then adding the total length of abnormal points."
    },
    {
        question: "What is the minimum score for a non-typical whitetail deer to qualify for Boone and Crockett Awards?",
        choices: [
            "175",
            "185",
            "195",
            "205"
        ],
        correctAnswer: 1,
        explanation: "The minimum score for a non-typical whitetail deer to qualify for Boone and Crockett Awards is 185."
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
            <h1 className="text-2xl font-bold mb-4">Whitetail Scoring Quiz</h1>
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

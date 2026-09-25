// Course curriculum registry — single source for /courses/data-science and the
// lesson pages at /data-science/[slug]. Mirrors DATA_SCIENCE_COURSE.md.
// `kmeans` is rendered by the bespoke KMeansStory; all others use ScrollyLesson
// + LessonViz (by `viz` type). Steps are written to teach intuition with a
// concrete example in (almost) every beat.

export type LessonStep = { title: string; text: string };

export type Lesson = {
  slug: string;
  title: string;
  tag: string; // module label shown as the lesson tag
  viz: string; // LessonViz type
  free?: boolean;
  steps: LessonStep[];
  recap?: string[];
};

export type CourseModule = {
  num: number;
  title: string;
  blurb: string;
  lessons: Lesson[];
};

export const course: CourseModule[] = [
  {
    num: 0,
    title: "Foundations",
    blurb: "What this thing is, and what it's made of.",
    lessons: [
      {
        slug: "what-is-ml",
        title: "What is machine learning?",
        tag: "Foundations",
        viz: "generic",
        free: true,
        steps: [
          { title: "The old way: write the rules", text: "To catch spam by hand you'd write rules: if it says 'free money', flag it. But spammers adapt, exceptions pile up, and the rulebook becomes unmaintainable." },
          { title: "The new way: show examples", text: "Instead, show the computer 10,000 emails already labelled spam / not-spam. It discovers the patterns itself — no rulebook required." },
          { title: "A model is a learned function", text: "Training produces a 'model': a function that maps inputs (an email) to an output (spam probability). Learning = finding the settings that make it accurate." },
          { title: "Supervised learning", text: "When every example has a known answer (label), the model learns to predict it. Example: past house sales (features + price) → predict a new house's price." },
          { title: "Unsupervised learning", text: "When there are no labels, the model finds structure on its own. Example: group customers into segments nobody defined in advance." },
          { title: "Generalisation is the whole game", text: "We don't care how well it does on emails it has already seen — we care about new ones. A model that only memorises is useless." },
          { title: "So, in one line", text: "Machine learning = programming with examples instead of rules, judged by how well it handles data it has never seen." },
        ],
        recap: [
          "ML learns patterns from examples rather than hand-written rules",
          "Supervised = labelled data; Unsupervised = find structure without labels",
          "Success is measured on unseen data (generalisation), not the training set",
        ],
      },
      {
        slug: "data-rows-features",
        title: "Data, rows & features",
        tag: "Foundations",
        viz: "correlation",
        steps: [
          { title: "A dataset is a table", text: "Rows are the things you're studying (a customer, a house, a patient). Columns are their measured traits — the 'features'." },
          { title: "Features are the model's senses", text: "A model only knows what you feed it. A house's features might be size, bedrooms, age, and distance to a station." },
          { title: "Rows become points", text: "Pick two features and every row becomes a dot on a 2D plot. This is 'feature-space' — the world the model actually sees." },
          { title: "More features = more dimensions", text: "Ten features means a 10-dimensional space. We can't picture it, so we usually reason with two at a time." },
          { title: "The target vs. the features", text: "In supervised learning one column is special — the answer you want to predict (the 'target'). The rest are inputs." },
          { title: "Feature engineering", text: "Often the win isn't a fancier model but a better feature. From a timestamp you might derive 'day of week' or 'is holiday' — suddenly patterns pop out." },
          { title: "Garbage in, garbage out", text: "No algorithm rescues bad features. Most of a data scientist's time goes into shaping the table, not tuning the model." },
        ],
        recap: [
          "Rows are things, columns are features, one column may be the target",
          "Each row is a point in feature-space",
          "Good features usually matter more than a fancy model",
        ],
      },
      {
        slug: "similarity-distance",
        title: "Similarity & distance",
        tag: "Foundations",
        viz: "scatter",
        steps: [
          { title: "‘Similar’ needs a definition", text: "Humans eyeball similarity; a computer needs a number. In feature-space, similar things sit close together." },
          { title: "Euclidean distance", text: "The straight-line distance between two points — the everyday ruler. Two songs with similar tempo and energy land near each other." },
          { title: "Units can lie", text: "If 'salary' is in the tens of thousands and 'age' in tens, salary dominates the distance. We standardise features so each gets a fair say." },
          { title: "Other distances exist", text: "For text we often use cosine similarity (angle, not length); for grids, Manhattan distance. The right ruler depends on the data." },
          { title: "Groups fall out of distance", text: "Colour each point by which centre it's nearest to and clusters appear — the seed of the K-Means algorithm." },
          { title: "It's everywhere", text: "Recommendations ('users like you'), clustering, anomaly detection, nearest-neighbour classifiers — all built on 'how far apart?'" },
        ],
        recap: [
          "Similarity = closeness in feature-space, measured by a distance",
          "Standardise features so no single scale dominates",
          "Pick the distance that fits the data (Euclidean, cosine, Manhattan…)",
        ],
      },
    ],
  },
  {
    num: 1,
    title: "Seeing Data",
    blurb: "Before you model, look.",
    lessons: [
      {
        slug: "distributions",
        title: "Distributions & histograms",
        tag: "Seeing Data",
        viz: "histogram",
        steps: [
          { title: "One feature, many values", text: "Take a single column — say, monthly rent across a city — and ask: what values are common, and which are rare?" },
          { title: "Bins and counts", text: "A histogram chops the range into bins and counts how many fall in each. The tall bars are the typical range." },
          { title: "The bell (normal)", text: "Many natural measurements — heights, exam scores — pile symmetrically around a middle. Lots of theory assumes this shape." },
          { title: "Skew is common in the wild", text: "Income, rent, and city populations lean right: most are modest, a few are huge. The average gets dragged up by the tail." },
          { title: "Mean vs. median", text: "With skew, the median (middle value) describes 'typical' better than the mean. One billionaire lifts average wealth but not the median." },
          { title: "Outliers", text: "A lonely bar far out — a ₹5-lakh rent in a normal neighbourhood — is an outlier. Investigate it: data error, or a real penthouse?" },
          { title: "Bin size matters", text: "Too few bins hides the shape; too many turns it into noise. Always try a couple before trusting the picture." },
        ],
        recap: [
          "Histograms show where a feature's values concentrate",
          "Real-world data is often right-skewed — prefer the median for 'typical'",
          "Watch for outliers and try a few bin sizes",
        ],
      },
      {
        slug: "relationships",
        title: "Relationships & scatterplots",
        tag: "Seeing Data",
        viz: "correlation",
        steps: [
          { title: "Two features at once", text: "A scatterplot puts one feature on each axis. Now you can see how they move together — e.g., house size vs. price." },
          { title: "Positive & negative trends", text: "Up-and-to-the-right = positive (bigger houses cost more). Down = negative (older cars are cheaper)." },
          { title: "Correlation, quantified", text: "The correlation coefficient runs −1 to +1: near ±1 is a tight line, near 0 is a cloud with no linear trend." },
          { title: "Correlation ≠ causation", text: "Ice-cream sales correlate with drownings — because both rise in summer. A hidden 'confounder' (heat) drives both." },
          { title: "Linear isn't everything", text: "Two features can be strongly related in a curve yet show near-zero linear correlation. Always look, don't just trust the number." },
          { title: "Why it matters for modelling", text: "Highly correlated features can be redundant; a strong feature–target relationship is a promising predictor. Scatterplots guide what to keep." },
        ],
        recap: [
          "Scatterplots reveal how two features move together",
          "Correlation runs −1…+1 but only captures linear trends",
          "Correlation ≠ causation — beware hidden confounders",
        ],
      },
      {
        slug: "dimensionality",
        title: "Too many dimensions (PCA)",
        tag: "Seeing Data",
        viz: "scatter",
        steps: [
          { title: "The curse of dimensionality", text: "Real datasets have dozens or thousands of features. In high dimensions everything looks far apart and our intuition breaks." },
          { title: "We can only see 2–3D", text: "A 784-pixel image of a digit is a point in 784-dimensional space. To eyeball structure we need to shrink it down." },
          { title: "Most dimensions are redundant", text: "Features overlap — height in cm and height in inches carry the same info. The 'true' shape often lives in far fewer dimensions." },
          { title: "PCA finds the best angles", text: "Principal Component Analysis rotates the data to the directions of greatest variation, then keeps the top few." },
          { title: "Keep the variance, drop the rest", text: "The first two components might capture 90% of the spread — a faithful 2D snapshot of a 50D cloud." },
          { title: "A readable map", text: "Project MNIST digits to 2D and the 0s, 1s, and 2s form separate islands — structure you could never see raw." },
          { title: "Caveats", text: "Axes lose their plain-English meaning, and PCA only captures linear structure (t-SNE/UMAP handle curves better)." },
        ],
        recap: [
          "High-dimensional data is hard to see and reason about",
          "PCA rotates to the directions of most variance and keeps the top few",
          "Great for visualising and compressing; axes lose plain meaning",
        ],
      },
    ],
  },
  {
    num: 2,
    title: "Finding Groups (Unsupervised)",
    blurb: "Discovering structure with no labels.",
    lessons: [
      {
        slug: "kmeans",
        title: "K-Means, Visually",
        tag: "Unsupervised",
        viz: "scatter",
        free: true,
        steps: [], // rendered by bespoke KMeansStory
      },
      {
        slug: "choosing-k",
        title: "Choosing k (the elbow)",
        tag: "Unsupervised",
        viz: "loss",
        steps: [
          { title: "k is your decision, not the data's", text: "K-Means needs you to pick the number of clusters up front. Pick wrong and the groups are meaningless." },
          { title: "Measure 'tightness'", text: "Inertia = total distance from points to their cluster centre. Lower means tighter, more coherent clusters." },
          { title: "More clusters always wins", text: "Inertia keeps dropping as k rises — at k = number-of-points it hits zero (each point is its own cluster). Useless." },
          { title: "The elbow", text: "Plot inertia vs. k. It plummets, then flattens. The 'elbow' — where extra clusters stop helping much — is your k." },
          { title: "The silhouette score", text: "A sturdier check: it rewards points that sit close to their own cluster and far from the next. Pick the k that maximises it." },
          { title: "Let the business decide", text: "Sometimes k is a choice, not a discovery: marketing wants 3 customer tiers, so k = 3 — even if 4 fits marginally better." },
        ],
        recap: [
          "K-Means makes you choose k in advance",
          "Inertia always falls with k — use the 'elbow', not the minimum",
          "Silhouette score and business context help pick k",
        ],
      },
      {
        slug: "kmeans-limits",
        title: "When K-Means fails",
        tag: "Unsupervised",
        viz: "scatter",
        steps: [
          { title: "It assumes round blobs", text: "K-Means draws straight boundaries around cluster centres — it implicitly expects roughly circular, similar-sized groups." },
          { title: "Odd shapes break it", text: "Two interleaving crescents (‘two moons’) get sliced straight down the middle — clearly wrong to any human eye." },
          { title: "Unequal sizes & densities", text: "A big sparse group and a tiny dense one confuse it; the big cluster's points get stolen by the nearer centre." },
          { title: "It's sensitive to scale", text: "Forget to standardise and the feature with the biggest range dictates every cluster. Always scale first." },
          { title: "Random starts, different answers", text: "Bad initial centres can trap it in a poor solution. 'k-means++' seeding and multiple restarts fix most of this." },
          { title: "Use the right tool", text: "For arbitrary shapes, DBSCAN groups by density; for soft memberships, Gaussian Mixtures. K-Means is fast, not universal." },
        ],
        recap: [
          "K-Means assumes round, similarly-sized, well-scaled blobs",
          "Standardise features and use k-means++ / restarts",
          "For odd shapes or densities, reach for DBSCAN or GMMs",
        ],
      },
    ],
  },
  {
    num: 3,
    title: "Making Predictions (Supervised)",
    blurb: "Learning from labelled examples.",
    lessons: [
      {
        slug: "knn",
        title: "k-Nearest Neighbours",
        tag: "Supervised",
        viz: "boundary",
        steps: [
          { title: "Judge by your neighbours", text: "To classify a new point, find its k closest labelled points and take the majority vote. That's the whole algorithm." },
          { title: "A worked example", text: "Is this home in SF or NY? Look at the 5 most similar homes (price, elevation). If 4 are SF, predict SF." },
          { title: "The lazy learner", text: "kNN doesn't really 'train' — it just stores the data and does the work at prediction time. Simple, but slow on huge datasets." },
          { title: "k controls smoothness", text: "k = 1 hugs every point (jagged, noise-sensitive). Large k averages more neighbours (smoother, but blurs fine detail)." },
          { title: "Use an odd k", text: "For two classes, an odd k avoids tied votes. And always scale features first — distance is everything here." },
          { title: "The curse strikes again", text: "In high dimensions all points look equally far, so 'nearest' loses meaning. kNN shines with few, well-scaled features." },
        ],
        recap: [
          "Classify by majority vote of the k nearest points",
          "k trades noise-sensitivity (small) for over-smoothing (large)",
          "Scale features; kNN struggles in high dimensions",
        ],
      },
      {
        slug: "decision-trees",
        title: "Decision Trees, Visually",
        tag: "Supervised",
        viz: "boundary",
        steps: [
          { title: "A game of 20 questions", text: "A tree classifies by asking simple yes/no questions: 'Is income > ₹50k?', then 'Age < 30?' — narrowing down at each step." },
          { title: "One split at a time", text: "Each question is a straight cut on one feature, carving feature-space into cleaner and cleaner rectangles." },
          { title: "How it picks a split", text: "It chooses the question that most reduces 'impurity' (Gini or entropy) — i.e., best separates the classes." },
          { title: "Why people love trees", text: "They're interpretable: you can read the path — 'approved because income high and no defaults'. Great for regulated domains like credit." },
          { title: "They overfit greedily", text: "Left unchecked, a tree keeps splitting until every leaf is one point — memorising noise, failing on new data." },
          { title: "Pruning & limits", text: "Cap the depth, require a minimum samples per leaf, or prune back. A shallower tree generalises far better." },
          { title: "The trade-off", text: "Single trees are readable but brittle — tiny data changes reshape them. That fragility motivates ensembles (next lesson)." },
        ],
        recap: [
          "Trees split feature-space with simple threshold questions",
          "Splits are chosen to reduce impurity (Gini/entropy)",
          "Interpretable but overfit easily — limit depth or prune",
        ],
      },
      {
        slug: "logistic-regression",
        title: "Logistic Regression",
        tag: "Supervised",
        viz: "boundary",
        steps: [
          { title: "Classification, not regression", text: "Despite the name, it predicts a class. Example: given two exam scores, will a student pass?" },
          { title: "Draw the best line", text: "It finds the straight boundary that best separates the two classes in feature-space." },
          { title: "Distance → probability", text: "Far on one side = confidently class A; near the line = unsure. The sigmoid squashes 'distance' into a 0–1 probability." },
          { title: "The threshold is a dial", text: "Default: predict positive if probability > 0.5. For cancer screening you'd lower it — catch more cases, accept more false alarms." },
          { title: "Coefficients tell a story", text: "Each feature's weight shows its pull on the odds — 'each extra year of age raises default odds by X%'. Interpretable and fast." },
          { title: "Strong baseline", text: "Cheap, robust, and hard to beat on linearly-separable problems. Start here before anything fancy." },
        ],
        recap: [
          "Fits the best separating line, then maps distance→probability via the sigmoid",
          "The decision threshold trades false positives vs. false negatives",
          "Coefficients are interpretable; a great baseline classifier",
        ],
      },
      {
        slug: "ensembles",
        title: "Ensembles (forests & boosting)",
        tag: "Supervised",
        viz: "boundary",
        steps: [
          { title: "One tree is fragile", text: "A single decision tree is easily thrown off by noise. What if we combined many?" },
          { title: "Wisdom of crowds", text: "Average many independent, imperfect guesses and the errors cancel — the crowd beats most individuals." },
          { title: "Random forests (bagging)", text: "Train hundreds of trees, each on a random slice of rows and features, then vote. Decorrelated trees → a smooth, robust boundary." },
          { title: "Boosting", text: "Instead of parallel, go sequential: each new tree focuses on the examples the previous ones got wrong (XGBoost, LightGBM)." },
          { title: "Why practitioners reach for these", text: "Gradient-boosted trees win a huge share of Kaggle competitions on tabular data — strong accuracy with modest tuning." },
          { title: "The cost", text: "You trade the single tree's readability for accuracy. Tools like feature-importance and SHAP help peek back inside." },
        ],
        recap: [
          "Combine many weak trees to cut error",
          "Bagging (random forest) averages independent trees; boosting fixes mistakes sequentially",
          "Top tabular performers — at the cost of interpretability",
        ],
      },
    ],
  },
  {
    num: 4,
    title: "How Models Learn",
    blurb: "The engine under the hood.",
    lessons: [
      {
        slug: "linear-regression",
        title: "Linear Regression",
        tag: "How Models Learn",
        viz: "regression",
        steps: [
          { title: "Predict a number", text: "Regression predicts a quantity, not a class — e.g., a house's price from its size." },
          { title: "Fit a straight line", text: "Model: price = slope × size + intercept. Learning means finding the slope and intercept that fit best." },
          { title: "Residuals = the misses", text: "For each house, the vertical gap between the real price and the line is the error (residual)." },
          { title: "Least squares", text: "We square the residuals (so big misses hurt more, signs don't cancel) and pick the line with the smallest total." },
          { title: "Read the coefficients", text: "A slope of ₹8,000/sq-ft means each extra square foot adds ₹8,000 to the prediction — directly interpretable." },
          { title: "How good is the fit? (R²)", text: "R² is the fraction of variation the line explains: 0 = no better than the average, 1 = perfect." },
          { title: "Don't extrapolate", text: "A line fit on 500–2000 sq-ft homes says nothing reliable about a 10,000 sq-ft mansion. Stay within the data's range." },
        ],
        recap: [
          "Regression predicts a number by fitting a line",
          "Least squares minimises total squared residuals",
          "Coefficients are interpretable; R² scores fit; avoid extrapolating",
        ],
      },
      {
        slug: "cost-surface",
        title: "Cost & the error surface",
        tag: "How Models Learn",
        viz: "loss",
        steps: [
          { title: "How do we say a model is 'wrong'?", text: "We need one number to minimise. For regression it's the Mean Squared Error — the average squared miss." },
          { title: "Error depends on the parameters", text: "Change the slope and the error changes. So error is a function of the model's settings." },
          { title: "Picture the landscape", text: "Plot error against a single parameter and you get a curve — a valley. Two parameters make a bowl-shaped surface." },
          { title: "Convex = one bottom", text: "For linear regression the bowl is convex: a single lowest point, no traps. That's why it's reliable." },
          { title: "The goal", text: "Learning is just: find the parameter values at the bottom of the valley — the lowest possible error." },
          { title: "When bowls get bumpy", text: "Neural networks have craggy surfaces with many dips. Finding a good-enough valley is the whole challenge (next lesson)." },
        ],
        recap: [
          "A loss function turns 'wrongness' into one number (e.g., MSE)",
          "Error vs. parameters is a surface; learning finds its lowest point",
          "Linear regression's bowl is convex; neural nets' are bumpy",
        ],
      },
      {
        slug: "gradient-descent",
        title: "Gradient Descent, Visually",
        tag: "How Models Learn",
        viz: "loss",
        steps: [
          { title: "You can't always solve it directly", text: "For complex models there's no neat formula for the bottom. So we search for it, step by step." },
          { title: "Which way is downhill?", text: "The gradient (slope) at your current point tells you the steepest uphill direction — so step the opposite way." },
          { title: "Take a step", text: "Nudge the parameters a little downhill, recompute, repeat. Each step lowers the error." },
          { title: "The learning rate", text: "Step size matters: too big and you overshoot and diverge; too small and training crawls for ages." },
          { title: "Local minima & saddles", text: "Bumpy surfaces have false bottoms. Momentum and good initialisation help roll past them." },
          { title: "Batch vs. stochastic", text: "Using all data per step is stable but slow; using small random batches (SGD) is noisy but fast — and the noise helps escape traps." },
          { title: "Epochs", text: "One full pass over the data is an 'epoch'. Training runs many epochs until the error stops improving." },
        ],
        recap: [
          "Gradient descent steps downhill using the slope of the loss",
          "Learning rate controls step size — too big diverges, too small crawls",
          "SGD (mini-batches) is fast and helps escape poor minima",
        ],
      },
    ],
  },
  {
    num: 5,
    title: "Neural Networks",
    blurb: "From one neuron to a network.",
    lessons: [
      {
        slug: "the-neuron",
        title: "The neuron (perceptron)",
        tag: "Neural Networks",
        viz: "boundary",
        steps: [
          { title: "Inspired by biology, but simple", text: "An artificial neuron takes inputs, weights them, adds them up, and fires a signal. That's it." },
          { title: "Weights = importance", text: "Each input is multiplied by a weight. Big weight = that feature strongly sways the decision." },
          { title: "The bias term", text: "A bias shifts the threshold — how much total signal is needed before the neuron fires. It moves the boundary off the origin." },
          { title: "One neuron draws a line", text: "Geometrically, a neuron splits feature-space with a single straight boundary — it's basically logistic regression." },
          { title: "It can learn AND / OR", text: "With the right weights a neuron computes logical AND or OR — both are linearly separable." },
          { title: "The activation function", text: "A non-linear squashing step (sigmoid, ReLU) turns the raw sum into an output — and, crucially, lets us stack neurons meaningfully." },
        ],
        recap: [
          "A neuron = weighted sum of inputs + bias → activation",
          "One neuron carves a single straight boundary",
          "Weights set importance; the activation adds non-linearity",
        ],
      },
      {
        slug: "layers-nonlinearity",
        title: "Layers & non-linearity",
        tag: "Neural Networks",
        viz: "network",
        steps: [
          { title: "One line isn't enough", text: "The classic XOR problem can't be separated by any single straight line — one neuron simply fails." },
          { title: "Stack them into layers", text: "Feed several neurons' outputs into another neuron. Now the model can combine simple lines into complex shapes." },
          { title: "Non-linearity is the magic", text: "Without a non-linear activation, stacked layers collapse back into one line. ReLU/sigmoid let curves emerge." },
          { title: "Hidden layers bend the boundary", text: "A single hidden layer already lets the network wrap around XOR or concentric rings." },
          { title: "Universal approximation", text: "In theory, a big enough hidden layer can approximate almost any function — networks are extremely flexible." },
          { title: "Depth over width", text: "In practice, stacking many layers ('deep' learning) builds features hierarchically — edges → shapes → objects in vision." },
        ],
        recap: [
          "Single neurons can't solve non-linear problems like XOR",
          "Hidden layers + non-linear activations create curved boundaries",
          "Depth builds features hierarchically — the heart of deep learning",
        ],
      },
      {
        slug: "networks-training",
        title: "Networks, Visually",
        tag: "Neural Networks",
        viz: "network",
        steps: [
          { title: "Forward pass", text: "Inputs flow layer by layer to an output — the network's current prediction." },
          { title: "Measure the loss", text: "Compare the prediction to the truth with a loss function. At the start it's basically random and very wrong." },
          { title: "Backpropagation", text: "The chain rule pushes the error backwards, computing how much each weight contributed to the mistake." },
          { title: "Nudge every weight", text: "Gradient descent then tweaks all the weights a little in the direction that reduces the loss." },
          { title: "Repeat over epochs", text: "Do this across many batches and epochs; the boundary sharpens and accuracy climbs." },
          { title: "Watch for overfitting", text: "A big network can memorise the training set. Dropout, weight decay, and early stopping keep it honest." },
          { title: "Why now?", text: "The ideas are decades old; big data, GPUs, and better tricks are what made deep learning finally work." },
        ],
        recap: [
          "Forward pass predicts; backprop assigns blame; gradient descent updates",
          "Training repeats over batches and epochs until loss plateaus",
          "Big nets overfit — regularise with dropout / early stopping",
        ],
      },
    ],
  },
  {
    num: 6,
    title: "Trusting a Model",
    blurb: "Is it actually any good?",
    lessons: [
      {
        slug: "overfitting",
        title: "Overfitting & underfitting",
        tag: "Trusting a Model",
        viz: "complexity",
        steps: [
          { title: "Memorising isn't learning", text: "A student who memorises last year's exam aces it — then fails a new one. Models do the same." },
          { title: "Underfitting", text: "Too simple a model (a straight line for a curvy trend) misses the real pattern — high error everywhere." },
          { title: "Just right", text: "The sweet spot captures the underlying trend while ignoring random noise." },
          { title: "Overfitting", text: "Too flexible a model snakes through every training point, modelling noise as if it were signal." },
          { title: "The tell", text: "Overfitting looks great on training data and bad on new data. The gap between the two is the alarm bell." },
          { title: "Fixes", text: "More data, fewer features, a simpler model, or regularisation (penalise complexity) all pull it back toward 'just right'." },
        ],
        recap: [
          "Underfit = too simple; Overfit = memorises noise",
          "Overfitting shows as a big train-vs-new-data gap",
          "Fix with more data, simpler models, or regularisation",
        ],
      },
      {
        slug: "train-test",
        title: "Train / test & cross-validation",
        tag: "Trusting a Model",
        viz: "complexity",
        steps: [
          { title: "Don't grade your own homework", text: "Scoring a model on the data it trained on flatters it. Of course it remembers those answers." },
          { title: "Hold data back", text: "Split off ~20% as a test set the model never sees in training. Its score there estimates real-world performance." },
          { title: "The train–test gap", text: "As you crank up complexity, training error keeps falling but test error turns back up — the U of overfitting." },
          { title: "The validation set", text: "You also need data to tune choices (which model, which settings). Tuning on the test set contaminates it — use a separate validation split." },
          { title: "Cross-validation", text: "With little data, rotate: split into k folds, train on k−1 and test on the last, k times, then average. Every point gets used." },
          { title: "Beware leakage", text: "If test information sneaks into training (e.g., scaling before splitting), scores look amazing and collapse in production." },
        ],
        recap: [
          "Judge models on held-out data they never trained on",
          "Use train / validation / test — don't tune on the test set",
          "Cross-validation squeezes small datasets; guard against leakage",
        ],
      },
      {
        slug: "bias-variance",
        title: "Bias–variance tradeoff",
        tag: "Trusting a Model",
        viz: "complexity",
        steps: [
          { title: "Two ways to be wrong", text: "Bias: the model is too rigid and misses the pattern. Variance: it's too twitchy and chases noise." },
          { title: "The dartboard", text: "High bias = tightly grouped but off-target. High variance = scattered around the target. You want tight and centred." },
          { title: "They trade off", text: "Simplify a model and bias rises, variance falls. Add flexibility and the opposite. You can't zero out both." },
          { title: "The U-curve", text: "Total error = bias² + variance + irreducible noise. It's high at both extremes, lowest in the middle — the sweet spot." },
          { title: "Which problem do I have?", text: "Underfitting (high train error) = bias problem. Big train-test gap = variance problem. The diagnosis picks the fix." },
          { title: "Levers", text: "More data mainly cuts variance; a richer model cuts bias; regularisation dials the balance." },
        ],
        recap: [
          "Bias = too rigid; Variance = too sensitive — they trade off",
          "Total error is U-shaped in complexity; aim for the minimum",
          "Diagnose via train/test errors, then pick the right lever",
        ],
      },
      {
        slug: "metrics",
        title: "Metrics that matter",
        tag: "Trusting a Model",
        viz: "confusion",
        steps: [
          { title: "Accuracy can fool you", text: "If 1% of transactions are fraud, a model that always says 'not fraud' is 99% accurate — and completely useless." },
          { title: "The confusion matrix", text: "Break predictions into four boxes: true/false positives and true/false negatives. Every metric comes from here." },
          { title: "Precision", text: "Of everything you flagged positive, how many really were? High precision = few false alarms. Matters when acting is costly." },
          { title: "Recall", text: "Of all the real positives, how many did you catch? High recall = few misses. Matters when missing is dangerous — like cancer." },
          { title: "The precision–recall tug-of-war", text: "Lower the threshold and recall rises but precision falls, and vice-versa. F1 blends them into one score." },
          { title: "ROC / AUC & thresholds", text: "The ROC curve shows the trade-off across all thresholds; AUC summarises it. Pick the operating point your problem demands." },
          { title: "Match metric to cost", text: "Spam filter: protect precision (don't bin real mail). Disease screen: protect recall (don't miss a case). The metric is a business choice." },
        ],
        recap: [
          "Accuracy misleads on imbalanced data",
          "Precision = few false alarms; recall = few misses; F1 balances them",
          "Choose the metric (and threshold) to fit the real-world cost",
        ],
      },
    ],
  },
  {
    num: 7,
    title: "Capstone",
    blurb: "Put it all together.",
    lessons: [
      {
        slug: "capstone",
        title: "End-to-end mini-project",
        tag: "Capstone",
        viz: "generic",
        steps: [
          { title: "Start with the question", text: "Framing beats modelling. 'Which customers will churn next month, and why?' is a good, actionable question." },
          { title: "Explore first (EDA)", text: "Distributions, missing values, relationships, outliers. Half your insight comes before any model." },
          { title: "Clean & engineer features", text: "Handle missing data, scale, and craft features ('days since last purchase'). This is where most of the effort goes." },
          { title: "Baseline, then improve", text: "Start with something dumb (predict the majority, or logistic regression). You can't tell if fancy is better without a baseline." },
          { title: "Validate honestly", text: "Hold data back, cross-validate, and pick the metric that matches the cost of mistakes. Guard against leakage." },
          { title: "Interpret & communicate", text: "A model nobody trusts is shelfware. Explain the drivers, show the trade-offs, and tell the story to stakeholders." },
          { title: "Ship & monitor", text: "Deploy, then watch: data drifts, behaviour changes, performance decays. A model is a product, not a one-off." },
        ],
        recap: [
          "Frame the question → explore → engineer → baseline → validate → communicate → monitor",
          "Most value is in framing, EDA, and features — not the algorithm",
          "Honest validation and clear communication make a model trusted",
        ],
      },
    ],
  },
];

// Flat lookup helpers
export const allLessons: Lesson[] = course.flatMap((m) => m.lessons);
export const getLesson = (slug: string) =>
  allLessons.find((l) => l.slug === slug);

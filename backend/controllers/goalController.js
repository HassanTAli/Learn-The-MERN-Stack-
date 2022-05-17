// @desc    get Goals
// @route   GET /api/goals
// @access  private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc    set Goal
// @route   POST /api/goals
// @access  private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
};

// @desc    update Goal
// @route   PUT /api/goals/:id
// @access  private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc    delete Goals
// @route   /api/goals/:id
// @access  private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};

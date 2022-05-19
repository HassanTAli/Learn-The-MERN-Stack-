const expressHandler = require('express-async-handler')
const Goal = require('../models/goalModal')

// @desc    get Goals
// @route   GET /api/goals
// @access  private
const getGoals = expressHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })

  res.status(200).json(goals)
})

// @desc    set Goal
// @route   POST /api/goals
// @access  private
const setGoal = expressHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add a text field')
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(goal)
})

// @desc    update Goal
// @route   PUT /api/goals/:id
// @access  private
const updateGoal = expressHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})

// @desc    delete Goals
// @route   /api/goals/:id
// @access  private
const deleteGoal = expressHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  await goal.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}

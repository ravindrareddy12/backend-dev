const Insight = require('../model/insightmodel');

module.exports.home= (req,res)=>{
    return res.render('word')
}

module.exports.createInsights = async (req, res) => {
    try {
      const { domain, wordCount } = req.body;
  
      if (!domain || !wordCount) {
        res.status(400).json({ error: 'Both domain and wordCount are required' });
        return;
      }
  
      const insight = new Insight({ domain, wordCount });
  
      const savedInsight = await insight.save();
  
      res.status(201).json(savedInsight);
    } catch (err) {
      console.log('Error creating insight:', err);
      res.status(500).json({ error: 'Failed to create insight' });
    }
  };
  

// Get all insights
module.exports.allInsights = async (req, res) => {
  try {
    const insights = await Insight.find({});

    res.json(insights);
  } catch (err) {
    console.log('Error retrieving insights:', err);
    res.status(500).json({ error: 'Failed to retrieve insights' });
  }
};

// Remove an insight
module.exports.deleteInsight = async (req, res) => {
  try {
    const { id } = req.params;

    await Insight.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (err) {
    console.log('Error deleting insight:', err);
    res.status(500).json({ error: 'Failed to delete insight' });
  }
};

// Update an insight as favorite
module.exports.updateInsight = async (req, res) => {
  try {
    const { id } = req.params;
    const { isFavorite } = req.body;

    await Insight.findByIdAndUpdate(id, { isFavorite });

    res.sendStatus(204);
  } catch (err) {
    console.log('Error updating insight:', err);
    res.status(500).json({ error: 'Failed to update insight' });
  }
};

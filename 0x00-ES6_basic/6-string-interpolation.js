export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `In ${year}, San Francisco ranked as the seventh-highest income county in the US, 
earning a per capita personal income of ${budget.income}. By 2015, the city had achieved 
a GDP of ${budget.gdp}, with a GDP per capita reaching ${budget.capita}.`;
}

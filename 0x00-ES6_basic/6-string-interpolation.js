export default function getSFDescription() {
  const year = 2017;
  const financialStats = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `In ${year}, San Francisco was ranked as the seventh-highest income county in the United States,\
 with a per capita income of ${financialStats.income}. By 2015, the city had a GDP of ${financialStats.gdp}, \
 and its GDP per capita was ${financialStats.capita}.`;
}

import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ formData }) {
  const tableOutput = calculateInvestmentResults(formData);

  // NOTE: Max chose to compute this value, when it is not necessary. We receive this value through formData.initialInvestment input
  // const initialInvestment =
  //   tableOutput[0].valueEndOfYear -
  //   tableOutput[0].interest -
  //   tableOutput[0].annualInvestment;

  console.log(tableOutput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableOutput.map((yearData) => {
          // NOTE: Max computed these values based on above computations which I've deemed unnecessary. As far as I know there is no benefit to computing them when we already have these values from the input
          const totalAmountInvested =
            formData.initialInvestment +
            formData.annualInvestment * yearData.year;

          const totalInterest = yearData.valueEndOfYear - totalAmountInvested;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function UserInput({ onChange, formData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={formData.initialInvestment}
            onChange={(e) => onChange('initialInvestment', e.target.value)}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={formData.annualInvestment}
            onChange={(e) => onChange('annualInvestment', e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={formData.expectedReturn}
            onChange={(e) => onChange('expectedReturn', e.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) => onChange('duration', e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}

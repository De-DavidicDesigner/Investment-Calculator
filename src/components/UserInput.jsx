import { useState } from "react"

export default function UserInput({ input, onChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INSTALMENT</label>
                    <input 
                        type="number" 
                        value={input.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', event.target.value)} 
                        required 
                    />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input 
                        type="number" 
                        value={input.annualInvestment} 
                        onChange={(event) => onChange('annualInvestment', event.target.value)} 
                        required 
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input 
                        type="number" 
                        value={input.expectedReturn} 
                        onChange={(event) => onChange('expectedReturn', event.target.value)} 
                        required
                    />
                </p>
                <p>
                    <label>DURATION</label>
                    <input 
                        type="number" 
                        value={input.duration} 
                        onChange={(event) => onChange('duration', event.target.value)} 
                        required 
                    />
                </p>
            </div>
        </section>
    )
}
import React from 'react'

function Coverage() {

    return (
      <div className='component-page'>
        <div className='component-body-left'>
            <div className='coverage-title'>Coverage & Fees</div>
        </div>

        <div className='component-body-right'>
            <div className='coverage-fees'>
                <div className='component-sub-title'>Fees</div>
                <div className='fees'>
                    <div className='coverage-line-item'>
                        <div>Session Fee</div>
                        <div>$175 per session</div>
                    </div>
                    <div className='coverage-line-item'>
                        <div>Couples Session Fee</div>
                        <div>$175 per session</div>
                    </div>
                    <div className='coverage-line-item'>
                        <div>Sliding Scale</div>
                        <div>Yes</div>
                    </div>
                </div>

                <div>
                    <div className='component-sub-title'>Insurances</div>
                    <div className='insurances'>
                        <div className='insurance'>Blue Cross</div>
                        <div className='insurance'>Blue Shield</div>
                        <div >Optium</div>
                        <div className='insurance'>UnitedHealthcare UHC | UBH</div>
                        <div>Out of network</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Coverage
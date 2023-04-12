import './section-book-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import RadioButton from '../radio-button/radio-button.component'
import SectionTitle from '../section-title/section-title.component'
import PrimaryButton from '../button-primary/button-primary.component'

const SectionBookForm = () => {
    return <div className="section__form">
        <form className='book__form'>
            <SectionTitle text='Start booking now!' extraClass="u-margin-bottom-medium u-center-left " />
            <FormInput
                id='name'
                placeholder='Full Name'
                type='text'
                label='Full Name'
            />
            <FormInput 
                id='email'
                placeholder='Email'
                type='email'
                label='Email'
            />
            <div className='form__group u-margin-bottom-medium'>
                <RadioButton
                    id='small'
                    name='size'
                    label='Small tour group'
                />
                <RadioButton
                     id='big'
                     name='size'
                     label='Big tour group'
                />
            </div>
            <div className='form__group'>
                <PrimaryButton color='green' isButton>
                    Next Step &rarr;
                </PrimaryButton>
            </div>
        </form>
    </div>
}

export default SectionBookForm
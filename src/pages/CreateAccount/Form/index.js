import './styles.css'

export default function () {
    return (
        <div className='create-account'>
            <form className='form'>
                <div className='form__form-left'>
                    <fieldset className="form-left__fieldset">
                        <label for="name">Nome Completo</label>
                        <input type="text" name="name" />
                    </fieldset>
                    <fieldset className="form-left__fieldset">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" />
                    </fieldset>
                    <fieldset className="form-left__fieldset">
                        <label for="cpf">Nome Completo</label>
                        <input placeholder='000.000.000-00' type="text" name="cpf" />
                    </fieldset>
                    <fieldset className="form-left__fieldset">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" />
                    </fieldset>
                    <fieldset className="form-left__fieldset">
                        <label for="confirmar-senha">Confirmar senha</label>
                        <input type="password" name="confirmar-senha" />
                    </fieldset>
                </div>

                <div className='form__form-right'>
                    <fieldset className="form-right__fieldset">
                        <label for="data-nascimento">Data de nascimento</label>
                        <input type="date" name="data-nascimento" />
                    </fieldset>
                    <fieldset className="form-right__fieldset">
                        <label for="question-deficiency">Você é uma pessoa com deficiência?</label>
                        <select name='question-deficiency'>
                            <option selected>Selecionar</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                    </fieldset>
                    <fieldset className="form-right__fieldset">
                        <label for="gender-identity">Identidade de gênero</label>
                        <select name='gender-identity'>
                            <option selected>Selecionar</option>
                            <option>Feminino</option>
                            <option>Cisgênero</option>
                            <option>Transgênero</option>
                            <option>Transsexual</option>
                            <option>Travesti</option>
                        </select>
                    </fieldset>
                    <fieldset className="form-right__fieldset">
                        <label for="sexual-orientation">Orientação sexual</label>
                        <select name='sexual-orientation'>
                            <option selected>Selecionar</option>
                            <option>Heterossexual</option>
                            <option>Homossexual</option>
                            <option>Bissexual</option>
                            <option>Pansexual</option>
                            <option>Assexual</option>
                        </select>
                    </fieldset>
                    <fieldset className="form-right__fieldset">
                        <label for="raca-cor-etnia">Raça, cor, etnia</label>
                        <select>
                            <option selected>Selecionar</option>
                            <option>Preto</option>
                            <option>Pardo</option>
                            <option>Indígena</option>
                            <option>Branco</option>
                            <option>Amarelo</option>
                        </select>
                    </fieldset>
                </div>

                <div>
                    <fieldset className="form-right__fieldset">
                        <label for="termos-condicoes">Termos e condições</label>
                        <textarea rows="1" cols="1000" disabled>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </textarea>
                    </fieldset>
                    <fieldset className="form-right__fieldset">
                        <input type="checkbox" name="aceitar-termos" />
                        <label for="termos-condicoes"> Li e aceito os termos e condições.</label>
                    </fieldset>
                </div>

                <button className='form_btn' type='submit'>Criar conta</button>

            </form>
        </div>
    )
}
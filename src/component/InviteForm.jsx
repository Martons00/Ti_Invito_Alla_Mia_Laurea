import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const InviteForm = () => {
    const [nomePersona, setNomePersona] = useState('');
    const [rispostaIndovinello, setRispostaIndovinello] = useState('');
    const [step, setStep] = useState(0); // 0: nome, 1: indovinello, 2: invito

    const handleNextNome = (e) => {
        e.preventDefault();
        if (nomePersona.trim()) {
            setStep(1); // Vai all'indovinello
        }
    };

    const handleIndovinello = (e) => {
        e.preventDefault();
        const risposta = rispostaIndovinello.toLowerCase().trim();
        if (risposta === 'sempre') {
            setStep(2); // Mostra invito
        } else {
            alert('⚽ Forza Napoli SEMPRE! Riprova 😎');
        }
    };

    const renderWithBold = (text) => {
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    };

    return (
        <div className="project-description">
            <div>
                <p
                    className="project-description__text"
                    dangerouslySetInnerHTML={{
                        __html: renderWithBold(
                            step === 0 ? "Ciao **ospite**! \nInserisci il tuo nome per iniziare." :
                                step === 1 ? "Benvenuto **" + nomePersona + "**! Completa con la risposta giusta e ne saprai di più." :
                                    "Caro/a ** " + nomePersona + " **! Meriti di esserci! 🎊"
                        )
                    }}
                />
            </div>

            {/* STEP 1: Box nome */}
            {step === 0 && (
                <form onSubmit={handleNextNome} className="project-description__form">
                    <div style={{ paddingTop: '20px' }}>
                        <label htmlFor="nomePersona" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                            Il tuo nome:
                        </label>
                        <input
                            id="nomePersona"
                            type="text"
                            value={nomePersona}
                            onChange={(e) => setNomePersona(e.target.value)}
                            placeholder="Es. Tony Pitony"
                            style={{
                                width: '100%', padding: '12px', border: '2px solid #5227FF',
                                borderRadius: '8px', fontSize: '16px', boxSizing: 'border-box'
                            }}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="program-icon-item project-description__link"
                        style={{
                            background: 'linear-gradient(45deg, #5227FF, #B19EEF)',
                            color: 'white', border: 'none', padding: '12px 24px',
                            borderRadius: '25px', cursor: 'pointer', textDecoration: 'none',
                            display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '20px'
                        }}
                    >
                        <span className="icon">➡️</span>
                        <span className="label">Avanti</span>
                    </button>
                </form>
            )}

            {/* STEP 2: Box indovinello */}
            {step === 1 && (
                <form onSubmit={handleIndovinello} className="project-description__form">
                    <div style={{ paddingTop: '20px' }}>
                        <label htmlFor="indovinello" style={{ display: 'block', marginBottom: '15px', fontWeight: 'bold', fontSize: '18px' }}>
                            "FORZA NAPOLI ..."
                        </label>
                        <img
                            src="/Ti_Invito_Alla_Mia_Laurea/img/napoli.png"
                            alt="Indovinello"
                            style={{ width: '50%', marginBottom: '20px', borderRadius: '8px' }}
                        />
                        <input
                            id="indovinello"
                            type="text"
                            value={rispostaIndovinello}
                            onChange={(e) => setRispostaIndovinello(e.target.value)}
                            placeholder="La risposta giusta?"
                            style={{
                                width: '100%', padding: '15px', border: '3px solid #FF9FFC',
                                borderRadius: '12px', fontSize: '18px', fontWeight: 'bold',
                                textAlign: 'center', boxSizing: 'border-box', textTransform: 'uppercase'
                            }}
                            autoFocus
                            required
                        />
                        <small style={{ display: 'block', marginTop: '10px', color: '#666' }}>
                            💡 Se non la sai non meriti di esserci! ⚽🔵
                        </small>
                    </div>
                    <button
                        type="submit"
                        className="program-icon-item project-description__link"
                        style={{
                            background: 'linear-gradient(45deg, #FF9FFC, #5227FF)',
                            color: 'white', border: 'none', padding: '15px 30px',
                            borderRadius: '30px', cursor: 'pointer', textDecoration: 'none',
                            display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '20px',
                            fontSize: '16px', fontWeight: 'bold'
                        }}
                    >
                        <span className="icon">⚽</span>
                        <span className="label">Invia risposta</span>
                    </button>
                </form>
            )}

            {/* STEP 3: Schermata invito */}
            {step === 2 && (
                <>
                    <div style={{ paddingTop: '30px' }}>
                        <p className="project-description__text">
                            Sei ufficialmente invitato alla mia festa di laurea!<br /><br />

                            <strong>📅 Data: Venerdì 27 Marzo 2026</strong><br />
                            Vieni a festeggiare con noi! <strong><br />
                            Forza Napoli SEMPRE!</strong> 💙⚽<br /><br />

                            <strong>📍 CENA - 20:00</strong><br />
                            <strong>Il Cucinino</strong><br />
                            Via Giuseppe Mazzini, 50, 10123 Torino TO<br />
                            <a href="https://share.google/lmEhs8khdAht7XFmx" target="_blank" rel="noopener noreferrer"
                                style={{ color: '#00aeff', textDecoration: 'underline' }}>
                                🗺️ Apri su Google Maps
                            </a><br /><br />

                            <strong>💃 DOPOCENA - Ballo & Drink incluso</strong><br />
                            <strong>TheBeach</strong><br />
                            Via Murazzi del Po Gipo Farassino, 22, 10124 Torino TO<br />
                            <a href="https://share.google/1nKBI2jEtckfcxm2l" target="_blank" rel="noopener noreferrer"
                                style={{ color: '#00aeff', textDecoration: 'underline' }}>
                                🗺️ Apri su Google Maps
                            </a><br /><br />

                        </p>
                    </div>

                        <div><strong style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Aiutaci a tenere il conto.</strong></div>
                    <div style={{ paddingTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {/* Aggiungi all'evento */}
                        <div className="program-icon-item project-description__link">
                            <span className="icon">📅</span>
                            <a href="https://calendar.app.google/qMRWAUYr28WjJ5SG7"
                                target="_blank" rel="noopener noreferrer"
                                className="label"
                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
                                Aggiungi al Calendar
                            </a>
                        </div>

                        {/* Condividi (opzionale, tienilo se vuoi) */}
                        {/* <div className="program-icon-item project-description__link">
                            <span className="icon">📤</span>
                            <a href={`https://wa.me/?text=${encodeURIComponent(
                                `Forza Napoli SEMPRE! ${nomePersona} è invitato alla festa di laurea! 📅 Aggiungi al calendar: https://calendar.app.google/qMRWAUYr28WjJ5SG7`
                            )}`}
                                target="_blank" rel="noopener noreferrer"
                                className="label"
                                style={{ textDecoration: 'none', color: 'inherit' }}>
                                Condividi su WhatsApp
                            </a>
                        </div> */}
                    </div>

                </>
            )}

        </div>
    );
};

export default InviteForm;

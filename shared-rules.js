// Dolce Calma HR — Shared Rules & Info
// ✅ EDIT THIS FILE to update ALL pages at once
// All vacancy pages + index.html load this file

const WHATSAPP_NUMBER = '13479212471';
const WHATSAPP_DISPLAY = '+1 (347) 921-2471';
const EMAIL = 'HR@DolceCalma.com';
const HOURLY_RATE = '$4/hr';
const MONTHLY_ESTIMATE = '~$640';

const WA_SVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

// ═══════════════════════════════════════════
// SHARED SCHEDULE TABLE
// ═══════════════════════════════════════════
function getScheduleHTML() {
    return `
    <table>
        <tr><th>Detail</th><th>Requirement</th></tr>
        <tr><td>Start Time</td><td><span class="hl">2:00 PM Arizona Time (MST / UTC-7)</span> daily</td></tr>
        <tr><td>Equivalents</td><td>5:00 AM Manila (PHT) · 2:30 AM India (IST) · 2:00 AM Pakistan (PKT)</td></tr>
        <tr><td>Hours</td><td>8 hours per day minimum</td></tr>
        <tr><td>Weekly Minimum</td><td>40 hours per week (you CAN do more)</td></tr>
        <tr><td>Breaks</td><td>Allowed. PAUSE Time Doctor and notify #attendance on Slack</td></tr>
        <tr><td>Type</td><td>Full-time remote position</td></tr>
    </table>`;
}

// ═══════════════════════════════════════════
// SHARED MANDATORY TOOLS & RULES
// ═══════════════════════════════════════════
function getRulesHTML() {
    return `
    <div class="rule-card rule-red">
        <h4>🔴 Time Doctor (MANDATORY)</h4>
        <p>Must be running during ALL working hours. Screenshots taken automatically every 15 minutes. Must show active progress on every screenshot. PAUSE Time Doctor and notify #attendance on Slack when taking breaks.</p>
    </div>

    <div class="rule-card rule-green" style="border-color: #2196F3; background: linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%);">
        <h4 style="color: #1565C0;">📘 Time Doctor Instructions — READ CAREFULLY</h4>
        <p style="line-height: 1.9;">
            We use Time Doctor <strong>ONLY to count your working hours</strong>. We do NOT use it for task management.<br>
            <strong>How to use it:</strong> Open Time Doctor → type ANYTHING in the task name → press PLAY. That's it.<br>
            <strong>Do NOT ask</strong> "what should I put in Time Doctor?" — the answer is always: <strong>put anything and press play</strong>.<br>
            Your actual tasks and assignments come directly from your manager on Slack, NOT from Time Doctor.<br>
            We only look at your total hours and the screenshots. Nothing else.
        </p>
    </div>

    <div class="rule-card rule-red">
        <h4>🔴 Slack (MANDATORY)</h4>
        <p>Must be active and responsive during ALL working hours. Post progress updates regularly. Notify #attendance before taking any break.</p>
    </div>

    <div class="rule-card rule-red">
        <h4>🔴 Maximum Response Time = 2 Minutes</h4>
        <p>You MUST reply to Slack messages within 2 minutes during your shift. This is non-negotiable.</p>
    </div>

    <div class="rule-card rule-red">
        <h4>🔴 Stable Electricity & Internet Required</h4>
        <p>You MUST have reliable electricity and a stable internet connection. If you frequently lose power or disconnect during work — this job is not for you. We have had many people start working, then disappear after 2-3 hours claiming "electricity is off." <strong>This is not acceptable and will result in immediate removal.</strong> If your area has regular power outages, please do not apply.</p>
    </div>

    <div class="rule-card rule-red">
        <h4>🔴 Working Computer Required</h4>
        <p>You must have a functional, reliable computer that can handle your work tasks without crashing or freezing. Slow, broken, or unreliable machines cause delays and are not acceptable. If your computer has problems — fix them before you start.</p>
    </div>

    <div class="rule-card rule-red">
        <h4>🔴 No Disappearing During Shifts</h4>
        <p>If you go offline without notice during your shift, this is treated as abandoning your work. <strong>Doing this even once may result in immediate termination.</strong> If you need a break, PAUSE Time Doctor and notify #attendance BEFORE stepping away. Always communicate.</p>
    </div>`;
}

// ═══════════════════════════════════════════
// SHARED PAY BLOCK
// ═══════════════════════════════════════════
function getPayHTML() {
    return `
    <div class="pay-block">
        <h3>💰 Compensation & Payment</h3>
        <div class="pay-grid">
            <div class="pay-card">
                <div class="label">Starting Salary</div>
                <div class="amount">${HOURLY_RATE}</div>
                <div class="sub">USD · First 6 months</div>
            </div>
            <div class="pay-card">
                <div class="label">Monthly (40 hrs/wk)</div>
                <div class="amount">${MONTHLY_ESTIMATE}</div>
                <div class="sub">Performance review after 6 months</div>
            </div>
        </div>
        <div class="pay-note">
            <strong>Payment:</strong> Wise (TransferWise) — bi-weekly<br>
            <strong>Contract:</strong> No formal contract at start. Discussed later as needed.<br><br>
            We value and reward dedicated team members. After 6 months, salary adjustments are based on quality of work, reliability, responsiveness, and contribution to the team.
        </div>
    </div>`;
}

// ═══════════════════════════════════════════
// SHARED CTA (WhatsApp + Email)
// ═══════════════════════════════════════════
function getCTAHTML(keyword, subject) {
    const waText = encodeURIComponent(`${keyword} - ${subject}\n\nMy name: `);
    const emailSubject = encodeURIComponent(subject);
    return `
    <div class="cta-block">
        <h2>Ready to Apply?</h2>
        <p>Start your message with the keyword:</p>
        <div class="cta-keyword">${keyword}</div>
        <p>Answer all screening questions · Attach your resume/CV</p>
        <p style="margin-bottom:20px;">Subject: <span class="hl">${subject} — [Your Full Name]</span></p>
        <div class="cta-preferred">★ Preferred Contact Method</div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}" class="cta-whatsapp" target="_blank">
            ${WA_SVG}
            WhatsApp: ${WHATSAPP_DISPLAY}
        </a>
        <span class="cta-or">or send an email</span>
        <a href="mailto:${EMAIL}?subject=${emailSubject}" class="cta-email">📧 ${EMAIL}</a>
        <p class="cta-note">We review applications within 24–48 hours</p>
    </div>`;
}

// ═══════════════════════════════════════════
// INDEX PAGE — WhatsApp + General Rules
// ═══════════════════════════════════════════
function getIndexWhatsAppHTML() {
    return `
    <div class="cta-block" style="margin-top: 24px;">
        <h2>Contact Us</h2>
        <p>Interested in any position? Reach out directly:</p>
        <div class="cta-preferred" style="margin-top:12px;">★ Preferred Contact Method</div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20a%20position%20at%20Dolce%20Calma.%0A%0AMy%20name%3A%20" class="cta-whatsapp" target="_blank">
            ${WA_SVG}
            WhatsApp: ${WHATSAPP_DISPLAY}
        </a>
        <span class="cta-or">or send an email</span>
        <a href="mailto:${EMAIL}?subject=Job%20Application" class="cta-email">📧 ${EMAIL}</a>
    </div>`;
}

function getIndexRulesHTML() {
    return `
    <div class="divider"><span>General Rules — All Positions</span></div>

    <div class="card">
        <h3>Work Schedule (All Roles)</h3>
        ${getScheduleHTML()}
    </div>

    <div class="divider"><span>Mandatory Tools & Rules</span></div>
    ${getRulesHTML()}

    ${getPayHTML()}
    `;
}

// ═══════════════════════════════════════════
// AUTO-INJECT ON PAGE LOAD
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
    // Inject shared schedule
    document.querySelectorAll('[data-shared="schedule"]').forEach(el => {
        el.innerHTML = getScheduleHTML();
    });

    // Inject shared rules
    document.querySelectorAll('[data-shared="rules"]').forEach(el => {
        el.innerHTML = getRulesHTML();
    });

    // Inject shared pay
    document.querySelectorAll('[data-shared="pay"]').forEach(el => {
        el.innerHTML = getPayHTML();
    });

    // Inject shared CTA
    document.querySelectorAll('[data-shared="cta"]').forEach(el => {
        const keyword = el.dataset.keyword;
        const subject = el.dataset.subject;
        if (keyword && subject) {
            el.innerHTML = getCTAHTML(keyword, subject);
        }
    });

    // Inject index WhatsApp
    document.querySelectorAll('[data-shared="index-whatsapp"]').forEach(el => {
        el.innerHTML = getIndexWhatsAppHTML();
    });

    // Inject index rules
    document.querySelectorAll('[data-shared="index-rules"]').forEach(el => {
        el.innerHTML = getIndexRulesHTML();
    });
});

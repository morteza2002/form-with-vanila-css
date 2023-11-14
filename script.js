function setGender(gender) {
    document.getElementById('genderInput').value = gender;
    document.getElementById('genderDisplay').value = gender;
}

function generatePDF() {
    const fullName = document.getElementById('inputFullName').value;
    const phoneNumber = document.getElementById('inputPhoneNumber').value;
    const email = document.getElementById('inputEmail').value;
    const gender = document.getElementById('genderInput').value;
    const province = document.getElementById('selectProvince').value;
    const educationLevel = document.getElementById('selectEducationLevel').value;

    // Define the content for the PDF
    const content = `
        <h3>فرم اطلاعات ورودی</h3>
        <p>نام و نام خانوادگی: ${fullName}</p>
        <p>شماره تلفن: ${phoneNumber}</p>
        <p>ایمیل: ${email}</p>
        <p>جنسیت: ${gender}</p>
        <p>استان: ${province}</p>
        <p>مقطع تحصیلی: ${educationLevel}</p>
    `;

    // Convert content to PDF and download
    html2pdf(content, {
        margin: 10,
        filename: 'فرم_ورود_کاربر.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}

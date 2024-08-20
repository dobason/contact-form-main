const form = document.getElementById('my-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const textArea = document.getElementById('textArea');
const queryTypeRadios = document.getElementsByName('query-type');
const consentCheckbox = document.getElementById('consent-checkbox');
const queryTypeError = document.querySelector('.query-type-error'); // Chọn phần tử .query-type-error
const consentError = document.querySelector('.consent-error'); // Chọn phần tử .consent-error
const successMessage = document.getElementById('success-message'); // Chọn phần tử thông báo thành công

//Hàm submit form
form.addEventListener('submit', e => {
    e.preventDefault(); // Ngăn chặn việc submit form

    if (validateInputs()) { // Kiểm tra tính hợp lệ
        alert("Message Sent!Thanks for completing the form. We'll be in touch soon!");
        form.reset(); // Reset form
    }
});

// Hàm báo lỗi
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); // Lấy phần tử lỗi

    errorDisplay.innerText = message;
    errorDisplay.style.display = 'block'; // Hiển thị thông báo lỗi
    element.classList.add('input-error'); // Thêm viền đỏ cho trường nhập liệu
    element.classList.remove('success');
};

// Hàm xác nhận
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); // Lấy phần tử lỗi

    errorDisplay.innerText = '';
    errorDisplay.style.display = 'none'; // Ẩn thông báo lỗi
    element.classList.remove('input-error'); // Loại bỏ viền đỏ cho trường nhập liệu
    element.classList.add('success'); // Thêm viền xanh cho trường nhập liệu hợp lệ
};

const validateInputs = () => {
    const firstNameValue = firstName.value.trim(); // Xóa ký tự khoảng trắng
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const textAreaValue = textArea.value.trim();
    let isValid = true; // Biến kiểm tra tính hợp lệ của form

    if (firstNameValue === '') {
        setError(firstName, 'This field is required');
        isValid = false; // Cập nhật isValid
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'This field is required');
        isValid = false; // Cập nhật isValid
    } else {
        setSuccess(lastName);
    }

    if (emailValue === '') {
        setError(email, 'This field is required');
        isValid = false; // Cập nhật isValid
    } else {
        setSuccess(email);
    }

    if (textAreaValue === '') {
        setError(textArea, 'This field is required');
        isValid = false; // Cập nhật isValid
    } else {
        setSuccess(textArea);
    }

    // Kiểm tra các nút radio
    let queryTypeSelected = false;
    queryTypeRadios.forEach(radio => {
        if (radio.checked) {
            queryTypeSelected = true;
        }
    });

    if (!queryTypeSelected) {
        queryTypeError.innerText = 'Please select a query type';
        queryTypeError.style.display = 'block';
        isValid = false; // Cập nhật isValid
    } else {
        queryTypeError.innerText = '';
        queryTypeError.style.display = 'none';
    }

    // Kiểm tra checkbox
    if (!consentCheckbox.checked) {
        consentError.innerText = 'To submit this form, please consent to being contacted';
        consentError.style.display = 'block';
        isValid = false; // Cập nhật isValid
    } else {
        consentError.innerText = '';
        consentError.style.display = 'none';
    }

    return isValid; // Trả về trạng thái hợp lệ của form
};

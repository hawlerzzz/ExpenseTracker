


// Validates if the provided email string matches a standard email format.
// Returns true if valid, false otherwise.

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
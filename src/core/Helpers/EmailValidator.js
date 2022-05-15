
export function EmailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email can't be empty.";
  if(!re.test(email)) return "Ooops! we need a valid email address"
    return "";
}


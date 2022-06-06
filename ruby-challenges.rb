# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_even(num) 
    if num % 2 ==0
        "#{num} is even"
    else "#{num} is odd"
    end
end

p odd_even(num1)
p odd_even(num2)
p odd_even(num3)




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_out string
    string.delete 'aeiouAEIOU'
end

p vowel_out(album1)
p vowel_out(album2)
p vowel_out(album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palin_test string
  if string.downcase == string.downcase.reverse
    "#{string} is a palindrome"
  else "#{string} is not a palindrome"
  end
end

p palin_test(palindrome_tester1)
p palin_test(palindrome_tester2)
p palin_test(palindrome_tester3)

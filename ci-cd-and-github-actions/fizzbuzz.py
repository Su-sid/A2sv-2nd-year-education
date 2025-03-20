
def fizzbuzz(n):
    """
    Returns a list of numbers from 1 to n where:
      - Multiples of 3 are replaced by 'Fizz'
      - Multiples of 5 are replaced by 'Buzz'
      - Multiples of both 3 and 5 are replaced by 'FizzBuzz'
    """
    result = []
    for i in range(1, n+1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result

if __name__ == "__main__":
    n = 100  # Example input
    output = fizzbuzz(n)
    print(output)

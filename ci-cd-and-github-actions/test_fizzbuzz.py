import pytest
from fizzbuzz import fizzbuzz

def test_fizzbuzz_empty():
    """Test with n=0 should return an empty list."""
    assert fizzbuzz(0) == []

def test_fizzbuzz_small_range():
    """Test with a small range to verify basic functionality."""
    expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
    assert fizzbuzz(15) == expected

def test_regular_numbers():
    """Test that non-multiples of 3 or 5 remain as integers."""
    result = fizzbuzz(10)
    assert result[0] == 1
    assert result[1] == 2
    assert result[6] == 7
    assert result[7] == 8

def test_fizz_numbers():
    """Test that multiples of 3 (but not 5) are replaced with 'Fizz'."""
    result = fizzbuzz(10)
    assert result[2] == "Fizz"
    assert result[5] == "Fizz"
    assert result[8] == "Fizz"

def test_buzz_numbers():
    """Test that multiples of 5 (but not 3) are replaced with 'Buzz'."""
    result = fizzbuzz(10)
    assert result[4] == "Buzz"
    assert result[9] == "Buzz"

def test_fizzbuzz_numbers():
    """Test that multiples of both 3 and 5 are replaced with 'FizzBuzz'."""
    result = fizzbuzz(30)
    assert result[14] == "FizzBuzz"  # 15
    assert result[29] == "FizzBuzz"  # 30

def test_edge_case_one():
    """Test with n=1 should return [1]."""
    assert fizzbuzz(1) == [1]

def test_fizzbuzz_negative():
    """Test with negative number should return an empty list."""
    assert fizzbuzz(-5) == []

@pytest.mark.parametrize("n, expected_length", [
    (15, 15),
    (30, 30),
    (100, 100),
])
def test_result_length(n, expected_length):
    """Test that the result length matches the input n."""
    assert len(fizzbuzz(n)) == expected_length
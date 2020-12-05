# we have a string of letters.
# 1. we need to take each of the letters and convert them into their binary

# the best way to do this is to make a dictionary where the letters are the keys and the values will be the values. 
# A decimal is 65 so we can use the decimal number to convert it into its binary equivalent. 
# chr (python builtin fn); bin (python builtin fn), these functions take an integer and returns a character.  
# print(chr(65))
# print(bin(65))

binDict = {chr(i): bin(i) for i in range(128)}
binDict[None] = "00000000"
# print(binDict) 

def thePaddedPhrase(phrase):
    returnedlist = [None, None, None, None]
    for idx, char in enumerate(list(phrase[:4])):
        # print(char, idx)
        returnedlist[3-idx] = char
        # print(returnedlist)
    return returnedlist

thePaddedPhrase("FRED")


def convertToBin(character):
    value = binDict[character].split("b")[1]
    numOfZeros = 8 - len(value)
    newString = f"{'0' * numOfZeros}" + value
    return list(newString)


def decodedResults(charList):
    decodedList = []
    for char in charList:
        decodedList.append(convertToBin(char))
    return decodedList


# def encodedResults(decoded):



# convertToBin(":")

print(decodedResults(thePaddedPhrase("APPLE")))


# 2. shuffle them?
# 3. after we shuffle them we put them back into a number. 
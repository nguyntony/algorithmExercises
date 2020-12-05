# 1. Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements.

nums = [9, 1, 0, 3, 0, 5]
nums1 = [0, 18, 6, 7, 9, 0, 2, 0, 3, 0, 2, 0]


def move_zeros(list_given):
    for idx, num in enumerate(list_given):
        if num == 0:
            zero_element = list_given.pop(idx)
            list_given.append(zero_element)


move_zeros(nums)
print(nums)

move_zeros(nums1)
print(nums1)

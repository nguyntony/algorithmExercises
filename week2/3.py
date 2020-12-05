# 3. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.
# Examples and clarification here: https://leetcode.com/problems/two-sum/

num_list = [1, 1, 2, 4, 5, 6, 3, 2, 3]


def finding_target(list_given, target_num):
    result = []

    for iidx, i in enumerate(num_list):
        for jidx, j in enumerate(num_list):
            if i + j == target_num and iidx != jidx:
                result.append([iidx, jidx])
        if len(result) != 0:
            break
    print(result)


finding_target(num_list, 10)

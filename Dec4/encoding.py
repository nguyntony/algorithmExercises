# For this challenge, we'll use a made-up format that encodes bundles of 4 characters by scrambling them
#   into 32-bit integer values for transmission, then reverses the operation on the receive end to reconstitute the original text.

# The below image shows how the individual bits in the original raw text (top row) are mixed together
#   into the 32-bit output value on the bottom row:
#
#
# Ascii Table Link: http://www.asciitable.com
#
#
#   Raw Characters          Encoded Value (dec)
#        "foo"                124807030
#       " foo"               250662636
#       "foot"                267939702
#       "BIRD"               251930706
#        "...."                15794160
#       "^^^^"               252706800
#        "Woot"                266956663
#        "no"                  53490482

# The Task
# The task for part 1 of this challenge is to write just enough code to unlock the rest of it. 
# We expect that a skilled developer should be able to implement the encoding step of this in an hour or so using the above diagrams and example data.
# To move forward in our recruiting process, create a bit of code that can encode a single 4-character block 
# of text as described above. If you have an urge to implement your solution by converting input into a text
#  string containing "binary" data -- resist that urge and find a different approach. See below for more 
# details on how to submit materials to complete part 1.

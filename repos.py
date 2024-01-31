import os

data = [
    # ['Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5'],
    ['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3', 'Row 1, Col 4', 'Row 1, Col 5'],
    ['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3', 'Row 2, Col 4', 'Row 2, Col 5'],
    ['Row 3, Col 1', 'Row 3, Col 2', 'Row 3, Col 3', 'Row 3, Col 4', 'Row 3, Col 5']
    # Add more rows as needed
]


def split_array_into_columns(input_array, num_columns) -> list:
    """
    将输入数组按照指定的列数分割成多个数组列。

    Parameters:
    - input_array: 要分割的数组
    - num_columns: 列数

    Returns:
    - 分割后的数组列表
    """
    # 计算每一列的元素数量
    elements_per_column = len(input_array) // num_columns

    # 初始化分割后的数组列表
    result_arrays = []

    # 分割数组
    for i in range(elements_per_column):
        start_index = i * num_columns
        end_index = (i + 1) * num_columns
        result_arrays.append(input_array[start_index:end_index])

    return result_arrays


def get_all_cvs_file(directory_path):
    return [file for file in os.listdir(directory_path) if file.endswith('.csv')]


# Function to generate Markdown table
def generate_markdown_table(data):
    # Determine column widths
    col_widths = [max(len(str(cell)) for cell in col) for col in zip(*data)]

    # Generate table header
    header = '| ' + ' | '.join(f'{col:<{width}}' for col, width in zip(data[0], col_widths)) + ' |'
    separator = '| ' + ' | '.join('-' * (width + 2) for width in col_widths) + ' |'

    # Generate table rows
    rows = [f'| {row[0]:<{col_widths[0]}} | ' + ' | '.join(
        f'{cell:<{width}}' for cell, width in zip(row[1:], col_widths[1:])) + ' |' for row in data[1:]]

    # Combine everything
    markdown_table = '\n'.join([header, separator] + rows)

    return markdown_table


if __name__ == '__main__':
    # Print the generated Markdown table
    # print(generate_markdown_table(data))
    #
    # print(get_all_cvs_file("./eastmoney"))
    url = 'https://github.com/manymore13/report/blob/main/eastmoney/'
    cvs_array = get_all_cvs_file("./eastmoney")
    links = []
    for title in cvs_array:
        name = title.replace(".csv", "")
        link = "[{}]({})".format(name, url + title)
        links.append(link)
    columns = 5
    result = split_array_into_columns(links, columns)
    titles = ['行业名称' for i in range(columns)]
    result.insert(0, titles)
    print(generate_markdown_table(result))

    # 打印结果
    # for col in result:
    #     print(col)
